/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/23 14:49
 */
import axios from 'axios';
import {AppStoreResponse, GithubReleaseApiResponse} from './types';

const GITHUB_RELEASE_API =
  'https://api.github.com/repos/whu-ham/whu-ham.github.io/releases';

const GITHUB_RELEASES_PAGE =
  'https://github.com/whu-ham/whu-ham.github.io/releases/latest';

/**
 * Mirrors raced against api.github.com. Each one is a URL-prefix proxy:
 * appending the original URL to the mirror origin fetches it through that
 * mirror.
 */
const GITHUB_API_PROXIES = [
  'https://v4.gh-proxy.org/',
  'https://v6.gh-proxy.org/',
  'https://cdn.gh-proxy.org/',
  'https://axisnow.gh-proxy.org/',
];

/**
 * Hard cap on a single attempt. The endpoints are raced, so this only bounds
 * the case where every one of them is slow: the page still resolves at the
 * speed of the fastest endpoint rather than the sum of all of them.
 */
const REQUEST_TIMEOUT_MS = 8000;

const JSONP_TIMEOUT_MS = 8000;

interface ReleaseListResult {
  releases: GithubReleaseApiResponse[];
  /**
   * Origin of the mirror the list came through, or undefined when GitHub
   * answered directly. Download links are rewritten through this mirror,
   * because a network that cannot reach the API cannot reach
   * github.com release downloads either.
   */
  proxyPrefix?: string;
}

interface ReleaseListAttempt {
  /** Kept so the failure the page reports can name the endpoint it came from. */
  url: string;
  result: Promise<ReleaseListResult>;
}

/**
 * A mirror can answer with an HTML error page or a JSON error object instead
 * of the release array, so a payload of the wrong shape must count as a
 * failed attempt rather than being handed to the page.
 */
const isReleaseList = (data: unknown): data is GithubReleaseApiResponse[] =>
  Array.isArray(data) &&
  data.every(release => !!release && typeof release.tag_name === 'string');

/**
 * Resolves with the first attempt that produces a release list, and rejects
 * once every attempt has failed.
 *
 * `Promise.race` cannot be used directly: it settles on the first attempt to
 * finish rather than the first to succeed, so one fast failure would lose the
 * race for endpoints that were about to answer correctly.
 */
const waitForFirstResult = (
  attempts: ReleaseListAttempt[],
): Promise<ReleaseListResult> => {
  let remaining = attempts.length;
  const failures: {url: string; error: unknown}[] = [];

  return new Promise<ReleaseListResult>((resolve, reject) => {
    for (const {url, result} of attempts) {
      // Every rejection is handled here, so the losers of the race do not
      // surface as unhandled rejections once the page has moved on.
      result.then(resolve, (error: unknown) => {
        failures.push({url, error});
        if (--remaining === 0) {
          reject(buildFailureError(failures));
        }
      });
    }
  });
};

const describeError = (error: unknown): string =>
  error instanceof Error ? error.message : String(error);

const buildFailureError = (
  failures: {url: string; error: unknown}[],
): Error => {
  // Prefer the direct api.github.com failure when it is among them: it
  // explains why the visitor needed a mirror at all, whereas a mirror error
  // only describes the fallback.
  const fromGithub = failures.find(({url}) => url === GITHUB_RELEASE_API);
  const primary = fromGithub ?? failures[0];
  const summary = failures
    .map(({url, error}) => `${url}: ${describeError(error)}`)
    .join('; ');
  return new Error(
    `All ${failures.length} GitHub API endpoints failed ` +
      `(first failure ${primary.url}: ${describeError(primary.error)}). ${summary}`,
  );
};

/**
 * Fetches the release list from GitHub and every mirror simultaneously and
 * keeps the first usable answer.
 *
 * The mirrors used to be tried in order, so a visitor who could not reach
 * api.github.com waited for that request to time out before the first mirror
 * was even contacted. Racing them makes the cost the fastest endpoint instead
 * of every endpoint that happens to be unreachable, which is what left the
 * download page blank for several seconds.
 */
const fetchGithubReleaseList = async (): Promise<ReleaseListResult> => {
  const controller = new AbortController();
  const attempts: ReleaseListAttempt[] = [
    {url: GITHUB_RELEASE_API},
    ...GITHUB_API_PROXIES.map(proxyPrefix => ({
      url: proxyPrefix + GITHUB_RELEASE_API,
    })),
  ].map(({url}, index) => ({
    url,
    result: axios
      .get(url, {timeout: REQUEST_TIMEOUT_MS, signal: controller.signal})
      .then(({data}) => {
        if (!isReleaseList(data)) {
          throw new Error(`Unexpected response body from ${url}`);
        }
        // The first entry is direct GitHub, so it carries no rewrite prefix.
        const proxyPrefix =
          index === 0 ? undefined : GITHUB_API_PROXIES[index - 1];
        return {releases: data, proxyPrefix};
      }),
  }));

  try {
    return await waitForFirstResult(attempts);
  } finally {
    // Stop the losing requests. Each response is a ~150 KB body that nobody
    // is going to read once a winner has rendered the page.
    controller.abort();
  }
};

const fetchIOSAppStoreReleaseInfo = async (): Promise<AppStoreResponse> => {
  const callback = 'iosCallback';
  return await requestJsoup<AppStoreResponse>(
    `https://itunes.apple.com/lookup?id=1577896044&callback=${callback}`,
    callback,
  );
};

const requestJsoup = <T>(url: string, callback: string): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    // JSONP hands the payload to a global function, which needs an indexed
    // access to `window` that the DOM lib will not type on its own. Read here
    // rather than at module scope so this file stays safe to import during
    // server-side rendering, where `window` does not exist.
    const jsonpGlobals = window as unknown as Record<string, unknown>;
    const script = document.createElement('script');
    const cleanup = () => {
      window.clearTimeout(timer);
      script.remove();
      delete jsonpGlobals[callback];
    };
    const timer = window.setTimeout(() => {
      cleanup();
      reject(new Error(`Request to ${url} timed out`));
    }, JSONP_TIMEOUT_MS);

    // A JSONP endpoint that never calls back left the promise pending
    // forever, so both a load failure and a timeout have to reject.
    script.onerror = () => {
      cleanup();
      reject(new Error(`Failed to load ${url}`));
    };
    jsonpGlobals[callback] = (data: T) => {
      cleanup();
      resolve(data);
    };
    script.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(script);
  });
};

export type {GithubReleaseApiResponse, ReleaseListResult};

export {
  fetchGithubReleaseList,
  fetchIOSAppStoreReleaseInfo,
  GITHUB_RELEASES_PAGE,
};
