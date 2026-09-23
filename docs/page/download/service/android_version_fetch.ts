/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/23 13:09
 */
import {fetchGithubReleaseList, GithubReleaseApiResponse} from './api';
import {MAX_PRERELEASE_COUNT} from './config';

interface AndroidVersionInfo {
  name: string;
  versionLog: string;
  prerelease: boolean;
  createTime: Date;
  apkList: AndroidApkInfo[];
}

interface AndroidApkInfo {
  name: string;
  downloadUrl: string;
  downloadCount: number;
}

/**
 * Build verification packages are published as `TEST-<timestamp>-<commit>`.
 *
 * The download page reads the same releases API the release workflow publishes
 * to, so a test build would otherwise be listed as a version: newest first, and
 * counted against MAX_PRERELEASE_COUNT, so one test build is enough to push a
 * real beta off the page. They are dropped here rather than never published,
 * because a maintainer still needs the APK they produced.
 */
const TEST_RELEASE_TAG_PREFIX = 'TEST-';

const getLatestAndroidVersionInfo = async () => {
  const {releases, proxyPrefix} = await fetchGithubReleaseList();
  const androidVersionInfoList = releases
    .filter(o => !o.tag_name.startsWith(TEST_RELEASE_TAG_PREFIX))
    .map(o => {
      return mapGithubResponseToAndroidVersionInfo(o, proxyPrefix);
    });

  const resultList: AndroidVersionInfo[] = [];
  let prereleaseCount = 0;
  for (const versionInfo of androidVersionInfoList) {
    if (versionInfo.prerelease) {
      // The GitHub API returns releases newest-first, so the first
      // MAX_PRERELEASE_COUNT pre-releases are the current ones. Older betas
      // are superseded and would push the stable build further down.
      if (prereleaseCount >= MAX_PRERELEASE_COUNT) {
        continue;
      }
      prereleaseCount++;
      resultList.push(versionInfo);
    } else {
      resultList.unshift(versionInfo);
      break;
    }
  }
  return resultList;
};

const mapGithubResponseToAndroidVersionInfo = (
  response: GithubReleaseApiResponse,
  proxyPrefix?: string,
): AndroidVersionInfo => {
  const assetList: AndroidApkInfo[] = response.assets.map(asset => {
    return {
      name: asset.name,
      downloadUrl: proxyPrefix
        ? proxyPrefix + asset.browser_download_url
        : asset.browser_download_url,
      downloadCount: asset.download_count,
    };
  });
  return {
    prerelease: response.prerelease,
    name: response.tag_name,
    versionLog: response.body,
    createTime: new Date(response.published_at),
    apkList: assetList,
  };
};

export type {AndroidVersionInfo, AndroidApkInfo};

export {getLatestAndroidVersionInfo};
