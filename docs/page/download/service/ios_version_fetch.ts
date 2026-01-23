/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/23 15:51
 */
import {fetchIOSAppStoreReleaseInfo} from './api';

interface IOSVersionInfo {
  name: string;
  updateLog: string;
  publishDate: Date;
}

const getLatestIOSVersionInfo = async (): Promise<IOSVersionInfo> => {
  const res = await fetchIOSAppStoreReleaseInfo();
  console.log(res);
  const result = res.results[0];
  return {
    name: result.version,
    publishDate: new Date(result.currentVersionReleaseDate),
    updateLog: result.releaseNotes,
  };
};

export type {IOSVersionInfo};

export {getLatestIOSVersionInfo};
