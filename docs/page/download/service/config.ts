/**
 * Upper bound on how many pre-releases the download page lists per platform.
 *
 * Beta builds are published far more often than stable ones, so without a cap
 * the top of the page fills with superseded betas. The iOS page stays below
 * this bound on its own: `ios-beta.json` holds a single TestFlight build, so
 * at most one beta is ever rendered there.
 */
export const MAX_PRERELEASE_COUNT = 2;
