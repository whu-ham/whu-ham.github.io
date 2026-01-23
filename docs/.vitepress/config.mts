import {defineConfig} from 'vitepress';
import {shared} from './config/shared';
import {en} from './config/en';
import {ja} from './config/ja';
import {zh} from './config/zh';

export default defineConfig({
  ...shared,
  locales: {
    root: {label: '简体中文', ...zh},
    en: {label: 'English', ...en},
    ja: {label: '日本語', ...ja},
  },
});
