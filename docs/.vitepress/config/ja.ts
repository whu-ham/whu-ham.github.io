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
    text: '開発者',
    link: '/ja/developers/',
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
          text: 'キャンパスバス',
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
  '/ja/developers/': [
    {
      text: '開発者',
      collapsed: false,
      base: '/ja/developers/',
      items: [
        {
          text: '概要',
          link: 'index',
        },
      ],
    },
    {
      text: 'Ham Connect',
      collapsed: false,
      base: '/ja/developers/open-platform/',
      items: [
        {
          text: '概要',
          link: 'index',
        },
        {
          text: '接続ガイド',
          link: 'oauth2-guide',
        },
      ],
    },
    {
      text: 'Ham Web',
      collapsed: false,
      base: '/ja/developers/ham-web/',
      items: [
        {
          text: '概要',
          link: 'index',
        },
        {
          text: 'SSO OAuth2 認証',
          link: 'sso-authorize',
        },
      ],
    },
    {
      text: 'Ham React Nativeコンポーネント',
      collapsed: false,
      base: '/ja/developers/ham-rn/',
      items: [
        {
          text: '概要',
          link: 'index',
        },
        {
          text: 'CAS 認証',
          link: 'cas',
        },
        {
          text: '教務モジュール',
          link: 'education',
        },
        {
          text: 'GPA 計算',
          link: 'score-calc',
        },
      ],
    },
  ],
};

export const ja = defineConfig({
  lang: 'ja-JP',
  title: 'Hamドキュメント',
  description: '',
  themeConfig: {
    nav: nav,
    sidebar: sideBar,
    sidebarMenuLabel: 'メニュー',
    darkModeSwitchLabel: '外観',
    outline: {
      label: 'このページの内容',
    },
    lastUpdated: {
      text: '最終更新',
    },
    returnToTopLabel: 'トップに戻る',
    lightModeSwitchTitle: 'ライトモードに切り替え',
    darkModeSwitchTitle: 'ダークモードに切り替え',
    langMenuLabel: '言語を変更',
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
