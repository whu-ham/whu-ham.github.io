type LocaleKey = 'zh' | 'en' | 'ja';

const LOCALE_STORAGE_KEY = 'vp-locale';
const LOCALE_USER_KEY = 'vp-locale-user';

type LocaleRouter = {
  go?: (to?: string) => Promise<void> | void;
  onAfterRouteChange?: (to: string) => void;
};

export const setupLocaleRedirect = (router: LocaleRouter) => {
  if (typeof window === 'undefined') {
    return;
  }

  let isAutoRedirect = false;

  const handleRoute = (to: string) => {
    const desiredLocale = getPreferredLocale();
    const currentLocale = getLocaleFromPath(to);
    if (currentLocale === desiredLocale) {
      return;
    }

    const targetPath = buildLocalePath(to, desiredLocale);
    if (targetPath === to) {
      return;
    }
    isAutoRedirect = true;
    router.go?.(targetPath);
  };

  router.onAfterRouteChange = (to: string) => {
    if (isAutoRedirect) {
      isAutoRedirect = false;
      return;
    }

    const desiredLocale = getPreferredLocale();
    const currentLocale = getLocaleFromPath(to);
    if (currentLocale !== desiredLocale) {
      setUserLocale(currentLocale);
      return;
    }

    handleRoute(to);
  };

  handleRoute(
    window.location.pathname + window.location.search + window.location.hash,
  );
  setupLocaleSelectionListener();
};

const setupLocaleSelectionListener = () => {
  document.addEventListener(
    'click',
    event => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.('a');
      if (!link) {
        return;
      }
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:')) {
        return;
      }
      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) {
        return;
      }
      const locale = getLocaleFromPath(url.pathname);
      const currentLocale = getLocaleFromPath(window.location.pathname);
      if (locale !== currentLocale) {
        setUserLocale(locale);
      }
    },
    {capture: true},
  );
};

const getPreferredLocale = (): LocaleKey => {
  const storedLocale = getStoredLocale();
  if (storedLocale) {
    return storedLocale;
  }
  return getBrowserLocale();
};

const getStoredLocale = (): LocaleKey | null => {
  if (localStorage.getItem(LOCALE_USER_KEY) !== '1') {
    return null;
  }
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored === 'en' || stored === 'ja' || stored === 'zh') {
    return stored;
  }
  return null;
};

const setUserLocale = (locale: LocaleKey) => {
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  localStorage.setItem(LOCALE_USER_KEY, '1');
};

const getBrowserLocale = (): LocaleKey => {
  const language = navigator.languages?.[0] ?? navigator.language ?? '';
  if (language.toLowerCase().startsWith('en')) {
    return 'en';
  }
  if (language.toLowerCase().startsWith('ja')) {
    return 'ja';
  }
  return 'zh';
};

const getLocaleFromPath = (path: string): LocaleKey => {
  if (path.startsWith('/en/')) {
    return 'en';
  }
  if (path === '/en') {
    return 'en';
  }
  if (path.startsWith('/ja/')) {
    return 'ja';
  }
  if (path === '/ja') {
    return 'ja';
  }
  return 'zh';
};

const stripLocalePrefix = (path: string) => {
  const stripped = path.replace(/^\/(en|ja)(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
};

const buildLocalePath = (path: string, locale: LocaleKey) => {
  const [pathname, suffix = ''] = path.split(/(?=[?#])/);
  const basePath = stripLocalePrefix(pathname);
  const normalized = basePath === '' ? '/' : basePath;
  if (locale === 'zh') {
    return normalized + suffix;
  }
  if (normalized === '/') {
    return `/${locale}/` + suffix;
  }
  return `/${locale}${normalized}` + suffix;
};
