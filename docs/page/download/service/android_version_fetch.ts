/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/23 13:09
 */
import {fetchGithubReleaseList, GithubReleaseApiResponse} from './api';

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

const getLatestAndroidVersionInfo = async () => {
  const response = await fetchGithubReleaseList();
  console.info(response);
  const androidVersionInfoList = response.map(o => {
    return mapGithubResponseToAndroidVersionInfo(o);
  });

  const resultList: AndroidVersionInfo[] = [];
  for (const versionInfo of androidVersionInfoList) {
    if (versionInfo.prerelease) {
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
): AndroidVersionInfo => {
  const assetList: AndroidApkInfo[] = response.assets.map(asset => {
    return {
      name: asset.name,
      downloadUrl: asset.browser_download_url,
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
