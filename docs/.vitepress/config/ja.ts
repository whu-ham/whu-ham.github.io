import {defineConfig, DefaultTheme} from 'vitepress';

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'ダウンロード',
    link: '/ja/download/',
  },
  {
    text: 'マニュアル',
    link: '/ja/handbook/',
  },
  {
    text: 'プライバシー',
    link: '/ja/privacy/',
  },
  {
    text: '概要',
    link: '/ja/about/',
  },
];

const sideBar: DefaultTheme.Sidebar = {
  '/ja/handbook/': [
    {
      text: 'マニュアル',
      collapsed: false,
      base: '/ja/handbook/',
      items: [
        {
          text: '概要',
          link: 'index',
        },
        {
          text: 'ステータス',
          link: 'status',
        },
        {
          text: '授業',
          link: 'course',
        },
        {
          text: '図書館',
          link: 'library',
        },
        {
          text: '成績',
          link: 'score',
        },
        {
          text: 'スポーツ施設',
          link: 'sport',
        },
        {
          text: 'キャンパスカード',
          link: 'pay',
        },
        {
          text: '予定',
          link: 'schedule',
        },
        {
          text: 'シャトル',
          link: 'bus',
        },
        {
          text: '自動化',
          link: 'automatic',
        },
        {
          text: '同期',
          link: 'sync',
        },
        {
          text: 'フィードバック',
          link: 'bugfix',
        },
      ],
    },
  ],
  '/ja/privacy/': [
    {
      text: 'プライバシー',
      collapsed: false,
      base: '/ja/privacy/',
      items: [
        {
          text: 'プライバシーポリシー',
          link: 'index',
        },
        {
          text: '利用規約',
          link: 'user-policy',
        },
      ],
    },
  ],
};

export const ja = defineConfig({
  lang: 'ja-JP',
  description: '',
  themeConfig: {
    nav: nav,
    sidebar: sideBar,
    outlineTitle: 'このページの内容',
    lastUpdatedText: '最終更新',
    returnToTopLabel: 'トップに戻る',
    editLink: {
      pattern:
        'https://github.com/whu-ham/whu-ham.github.io/edit/main/docs/src/:path',
      text: 'このページを編集',
    },
    docFooter: {
      prev: '前のページ',
      next: '次のページ',
    },
  },
});

export const jaSearch: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  ja: {
    placeholder: 'ドキュメントを検索',
    translations: {
      button: {
        buttonText: '検索',
        buttonAriaLabel: '検索',
      },
      modal: {
        searchBox: {
          resetButtonTitle: '条件をクリア',
          resetButtonAriaLabel: '条件をクリア',
          cancelButtonText: 'キャンセル',
          cancelButtonAriaLabel: 'キャンセル',
        },
        startScreen: {
          recentSearchesTitle: '最近の検索',
          noRecentSearchesText: '最近の検索はありません',
          saveRecentSearchButtonTitle: '最近の検索に保存',
          removeRecentSearchButtonTitle: '最近の検索から削除',
          favoriteSearchesTitle: 'お気に入り',
          removeFavoriteSearchButtonTitle: 'お気に入りから削除',
        },
        errorScreen: {
          titleText: '結果を取得できません',
          helpText: 'ネットワーク接続を確認してください',
        },
        footer: {
          selectText: '選択',
          navigateText: '移動',
          closeText: '閉じる',
          searchByText: '検索プロバイダー',
        },
        noResultsScreen: {
          noResultsText: '結果が見つかりません',
          suggestedQueryText: '次を試してください',
          reportMissingResultsText: 'この検索で結果が出るべきですか？',
          reportMissingResultsLinkText: 'お知らせください',
        },
      },
    },
  },
};
