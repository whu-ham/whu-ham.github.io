// https://vitepress.dev/guide/custom-theme
import {h, App} from 'vue';
import type {Theme} from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import {setupLocaleRedirect} from './localeRedirect';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({app, router}) {
    app.use(ElementPlus);
    injectVueComponent({app});
    setupLocaleRedirect(router);
  },
} satisfies Theme;

const injectVueComponent = ({app}: {app: App}) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
};
