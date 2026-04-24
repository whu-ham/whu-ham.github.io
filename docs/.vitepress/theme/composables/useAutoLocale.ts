import {inBrowser} from 'vitepress';

const LOCALE_STORAGE_KEY = 'vitepress-locale-preference';

/**
 * Supported locale prefixes and their corresponding browser language patterns.
 */
const LOCALE_MAP: {prefix: string; patterns: RegExp[]; langs: string[]}[] = [
  {prefix: '/en/', patterns: [/^en/i], langs: ['en-US']},
  {prefix: '/ja/', patterns: [/^ja/i], langs: ['ja-JP']},
  // Chinese (root) is the fallback — no prefix needed
];

/**
 * Detect the best locale prefix based on browser languages.
 * Returns the locale path prefix (e.g. '/en/', '/ja/') or '/' for Chinese.
 */
function detectLocalePrefix(): string {
  const languages = navigator.languages ?? [navigator.language];
  for (const lang of languages) {
    for (const {prefix, patterns} of LOCALE_MAP) {
      if (patterns.some(p => p.test(lang))) {
        return prefix;
      }
    }
  }
  // Default to Chinese (root)
  return '/';
}

/**
 * Map a stored VitePress lang value (e.g. 'en-US', 'ja-JP', 'zh-Hans')
 * to the corresponding URL prefix.
 */
function langToPrefix(lang: string): string {
  for (const {prefix, langs} of LOCALE_MAP) {
    if (langs.includes(lang)) {
      return prefix;
    }
  }
  // Default to Chinese (root)
  return '/';
}

/**
 * Get the current locale prefix from a path.
 */
function getCurrentLocalePrefix(path: string): string {
  for (const {prefix} of LOCALE_MAP) {
    if (path.startsWith(prefix)) {
      return prefix;
    }
  }
  return '/';
}

/**
 * Replace the locale prefix in a path.
 */
function replaceLocalePrefix(path: string, newPrefix: string): string {
  const currentPrefix = getCurrentLocalePrefix(path);
  if (currentPrefix === '/') {
    // Root locale: prepend the new prefix
    return newPrefix === '/' ? path : newPrefix + path.slice(1);
  }
  // Replace existing prefix with new one
  return newPrefix === '/'
    ? '/' + path.slice(currentPrefix.length)
    : newPrefix + path.slice(currentPrefix.length);
}

/**
 * Compute the redirect target path if locale redirection is needed.
 * Returns the new path string if a redirect is required, or null if not.
 *
 * Logic:
 * - If user has a stored manual locale preference, redirect to that locale.
 * - If preference is 'auto' or absent, detect from browser language.
 */
export function getAutoLocaleRedirect(): string | null {
  if (!inBrowser) return null;

  const preference = localStorage.getItem(LOCALE_STORAGE_KEY);
  const currentPath = window.location.pathname;
  const currentPrefix = getCurrentLocalePrefix(currentPath);

  let targetPrefix: string;

  if (preference !== null && preference !== 'auto') {
    // User has manually chosen a locale — redirect to it
    targetPrefix = langToPrefix(preference);
  } else {
    // First visit or auto-detected: detect from browser language
    targetPrefix = detectLocalePrefix();
    // Store as auto so browser detection doesn't repeat unnecessarily
    localStorage.setItem(LOCALE_STORAGE_KEY, 'auto');
  }

  if (targetPrefix !== currentPrefix) {
    return replaceLocalePrefix(currentPath, targetPrefix);
  }

  return null;
}

/**
 * Store the user's manual locale preference.
 * Call this when the user explicitly selects a locale from the switcher.
 */
export function setLocalePreference(locale: string): void {
  if (inBrowser) {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }
}

/**
 * Reset to auto-detection mode (clears stored preference).
 */
export function resetLocalePreference(): void {
  if (inBrowser) {
    localStorage.removeItem(LOCALE_STORAGE_KEY);
  }
}
