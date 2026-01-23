/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/23 14:47
 */
interface GithubReleaseApiResponse {
  url: string;
  html_url: string;
  assets_url: string;
  upload_url: string;
  tarball_url: string;
  zipball_url: string;
  discussion_url: string;
  id: number;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  body: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string; // ISO 8601 date string
  published_at: string; // ISO 8601 date string
  author: GithubUser;
  assets: GithubAsset[];
}

interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface GithubAsset {
  url: string;
  browser_download_url: string;
  id: number;
  node_id: string;
  name: string;
  label: string;
  state: string;
  content_type: string;
  size: number;
  download_count: number;
  created_at: string; // ISO 8601 date string
  updated_at: string; // ISO 8601 date string
  uploader: GithubUser;
}

interface AppStoreResponse {
  resultCount: number;
  results: AppDetails[];
}

interface AppDetails {
  artistViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  isGameCenterEnabled: boolean;
  ipadScreenshotUrls: string[];
  appletvScreenshotUrls: string[];
  artworkUrl512: string;
  screenshotUrls: string[];
  features: string[];
  supportedDevices: string[];
  advisories: string[];
  kind: string;
  averageUserRating: number;
  contentAdvisoryRating: string;
  trackCensoredName: string;
  trackViewUrl: string;
  minimumOsVersion: string;
  languageCodesISO2A: string[];
  fileSizeBytes: string;
  formattedPrice: string;
  trackContentRating: string;
  userRatingCountForCurrentVersion: number;
  artistId: number;
  artistName: string;
  genres: string[];
  price: number;
  releaseDate: string;
  currentVersionReleaseDate: string;
  bundleId: string;
  trackId: number;
  trackName: string;
  primaryGenreName: string;
  primaryGenreId: number;
  genreIds: string[];
  isVppDeviceBasedLicensingEnabled: boolean;
  sellerName: string;
  releaseNotes: string;
  averageUserRatingForCurrentVersion: number;
  version: string;
  wrapperType: string;
  currency: string;
  description: string;
  userRatingCount: number;
}

export type {
  GithubReleaseApiResponse,
  GithubUser,
  GithubAsset,
  AppStoreResponse,
  AppDetails,
};
