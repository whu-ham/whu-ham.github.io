import {defineConfig} from 'vitepress';
import {enSearch} from './en';
import {jaSearch} from './ja';
import {zhSearch} from './zh';
import * as path from 'node:path';

export const shared = defineConfig({
  title: 'Ham文档',
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
    ['link', {rel: 'icon', href: '/icon.png'}],
    ['link', {rel: 'manifest', href: '/manifest.webmanifest'}],
    [
      'meta',
      {
        name: 'algolia-site-verification',
        content: '48C2DFC304B4DCF2',
      },
    ],
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'bey8YpvItGutIgFBvc495TegrmPbv0tu2gIBkruBpzo',
      },
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
        indexName: 'ham_docs_pages',
        locales: {
          ...enSearch,
          ...jaSearch,
          ...zhSearch,
        },
      },
    },
  },
  sitemap: {
    hostname: 'https://docs.ham.nowcent.cn',
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../..'),
      },
    },
    optimizeDeps: {
      include: ['mermaid'],
    },
  },
});
