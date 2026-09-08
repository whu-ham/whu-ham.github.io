/**
 * Reads the iOS beta metadata that the release workflow publishes into
 * `docs/src/public/ios-beta.json`.
 *
 * The file lives in the public directory so it is served as a static asset,
 * which keeps the download page free of any GitHub API dependency.
 *
 * @author orangeboyChen
 */
import axios from 'axios';

interface IOSBetaInfo {
  versionName: string;
  versionCode: string;
  releaseNotes: string;
  testflightUrl: string;
  publishedAt: Date;
}

const BETA_INFO_PATH = '/ios-beta.json';

const getLatestIOSBetaInfo = async (): Promise<IOSBetaInfo | null> => {
  try {
    const {data} = await axios.get(BETA_INFO_PATH);
    // Guard against a partially written or hand-edited file. An empty seed
    // file counts as "no beta published", so every required field must be a
    // non-empty string.
    const required = ['version_name', 'version_code', 'testflight_url'];
    const hasAllFields =
      !!data &&
      required.every(
        key => typeof data[key] === 'string' && data[key].trim() !== '',
      );
    if (!hasAllFields) {
      return null;
    }

    const publishedAt = new Date(data.published_at);
    return {
      versionName: data.version_name,
      versionCode: data.version_code,
      releaseNotes:
        typeof data.release_notes === 'string' ? data.release_notes : '',
      testflightUrl: data.testflight_url,
      // An unparseable date should degrade to "now" rather than "Invalid Date".
      publishedAt: isNaN(publishedAt.getTime()) ? new Date() : publishedAt,
    };
  } catch (e) {
    // A missing file simply means no beta has been published yet.
    if (axios.isAxiosError(e) && e.response?.status === 404) {
      return null;
    }
    throw e;
  }
};

export type {IOSBetaInfo};

export {getLatestIOSBetaInfo};
