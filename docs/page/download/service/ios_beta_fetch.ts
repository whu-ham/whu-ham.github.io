/**
 * Reads the iOS beta metadata that the release workflow publishes into
 * `docs/src/public/ios-beta.json`.
 *
 * The file does not exist until the first beta is published, and it lives in
 * the public directory so it is served as a static asset. That keeps the
 * download page free of any GitHub API dependency, which matters because
 * `ham-ios` is private and its releases are not readable from a browser.
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
    // Guard against a partially written or hand-edited file. Every required
    // field must be a non-empty string, so a half-filled file degrades to
    // "no beta published" instead of rendering blank values.
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
    // The file does not exist until the first beta is published, so treat a
    // missing asset as "no beta yet" instead of failing the page.
    if (axios.isAxiosError(e)) {
      const status = e.response?.status;
      if (status === 404) {
        return null;
      }
      // Some static hosts return the SPA shell instead of a 404, so a
      // non-JSON response means the same thing.
      if (typeof e.response?.data === 'string') {
        return null;
      }
    }
    throw e;
  }
};

export type {IOSBetaInfo};

export {getLatestIOSBetaInfo};
