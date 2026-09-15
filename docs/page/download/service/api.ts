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
 * Mirrors tried in order when api.github.com cannot be reached from the
 * visitor's network. Each one is a URL-prefix proxy: appending the original
 * URL to the mirror origin fetches it through that mirror.
 */
const GITHUB_API_PROXIES = [
  'https://v4.gh-proxy.org/',
  'https://v6.gh-proxy.org/',
  'https://cdn.gh-proxy.org/',
  'https://axisnow.gh-proxy.org/',
];

const REQUEST_TIMEOUT_MS = 8000;

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

/**
 * A mirror can answer with an HTML error page or a JSON error object instead
 * of the release array, so a payload of the wrong shape must count as a
 * failed attempt rather than being handed to the page.
 */
const isReleaseList = (data: unknown): data is GithubReleaseApiResponse[] =>
  Array.isArray(data) &&
  data.every(release => !!release && typeof release.tag_name === 'string');

const fetchGithubReleaseList = async (): Promise<ReleaseListResult> => {
  const attempts: {url: string; proxyPrefix?: string}[] = [
    {url: GITHUB_RELEASE_API},
    ...GITHUB_API_PROXIES.map(proxyPrefix => ({
      url: proxyPrefix + GITHUB_RELEASE_API,
      proxyPrefix,
    })),
  ];

  let firstError: unknown = null;
  for (const {url, proxyPrefix} of attempts) {
    try {
      const {data} = await axios.get(url, {timeout: REQUEST_TIMEOUT_MS});
      if (!isReleaseList(data)) {
        firstError ??= new Error(`Unexpected response body from ${url}`);
        continue;
      }
      return {releases: data, proxyPrefix};
    } catch (e) {
      // Report the first failure: it happened on api.github.com, so it
      // describes the real problem, whereas a later mirror error only
      // describes the fallback.
      firstError ??= e;
    }
  }
  throw firstError ?? new Error(`All GitHub API endpoints failed`);
};

const fetchIOSAppStoreReleaseInfo = async (): Promise<AppStoreResponse> => {
  const callback = 'iosCallback';
  return await requestJsoup<AppStoreResponse>(
    `https://itunes.apple.com/lookup?id=1577896044&callback=${callback}`,
    callback,
  );
};

const requestJsoup = <T>(url: string, callback: string): Promise<T> => {
  return new Promise<T>(resolve => {
    window[callback] = data => {
      resolve(data);
    };
    const script = document.createElement('script');
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
