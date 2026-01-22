/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/23 14:49
 */
import axios from "axios";
import {AppStoreResponse, GithubReleaseApiResponse} from './types';

const fetchGithubReleaseList = async (): Promise<GithubReleaseApiResponse[]> => {
  const {data}: { status: number, data?: GithubReleaseApiResponse[] } =
    await axios.get(`https://api.github.com/repos/whu-ham/whu-ham.github.io/releases`);
  return data;
}

const fetchIOSAppStoreReleaseInfo = async (): Promise<AppStoreResponse> => {
  const callback = 'iosCallback';
  return await requestJsoup<AppStoreResponse>(`https://itunes.apple.com/lookup?id=1577896044&callback=${callback}`, callback);
}

const requestJsoup = <T>(url: string, callback: string): Promise<T> => {
  return new Promise<T>((resolve) => {
    window[callback] = (data) => {
      resolve(data);
    };
    let script = document.createElement('script');
    script.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(script);
  })
}


export type {
  GithubReleaseApiResponse
}

export {
  fetchGithubReleaseList,
  fetchIOSAppStoreReleaseInfo
}
