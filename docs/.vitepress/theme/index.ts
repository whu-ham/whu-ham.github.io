// https://vitepress.dev/guide/custom-theme
import {h, App, watch, onMounted} from 'vue';
import type {Theme} from 'vitepress';
import {useData} from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import {
  getAutoLocaleRedirect,
  setLocalePreference,
} from './composables/useAutoLocale';

/**
 * Invisible component that:
 * 1. On mount, auto-detects browser language and redirects if needed (first visit only).
 * 2. Watches for manual locale changes and stores the user's preference.
 */
const LocaleWatcher = {
  setup() {
    const {lang} = useData();
    onMounted(() => {
      // Auto-detect browser language or redirect to stored locale preference
      const redirectPath = getAutoLocaleRedirect();
      if (redirectPath) {
        // Use window.location.replace for a full page reload to the correct locale.
        // This is more reliable than router.go() which may not work during initial hydration.
        window.location.replace(redirectPath);
        return;
      }

      // Watch for locale changes after initial mount (i.e. user switching locale)
      watch(
        () => lang.value,
        newLang => {
          setLocalePreference(newLang);
        },
      );
    });
    return () => null;
  },
};

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-top': () => h(LocaleWatcher),
    });
  },
  enhanceApp({app}) {
    app.use(ElementPlus);
    injectVueComponent({app});
  },
} satisfies Theme;

const injectVueComponent = ({app}: {app: App}) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
};
