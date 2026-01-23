import {defineConfig} from 'vitepress';
import {zhSearch} from './zh';

export const shared = defineConfig({
  title: 'Ham',
  lastUpdated: true,
  srcDir: 'src',
  base: '/',
  head: [
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-P03RPXXGT4',
      },
    ],
    ['link', {rel: 'icon', href: 'icon-1024 2.png'}],
    [
      'link',
      {rel: 'manifest', href: 'https://whu-ham.github.io/manifest.webmanifest'},
    ],
  ],
  themeConfig: {
    logo: '/icon-1024 2.png',
    socialLinks: [{icon: 'github', link: 'https://github.com/whu-ham'}],
    search: {
      provider: 'algolia',
      options: {
        appId: '92H3AM2QST',
        apiKey: 'c509e924662c649625019c373a234990',
        indexName: 'whu-ham',
        locales: {
          ...zhSearch,
        },
      },
    },
  },
});
