import {defineConfig, DefaultTheme} from 'vitepress';

const nav: DefaultTheme.NavItem[] = [
  {
    text: '下载',
    link: '/download/',
  },
  {
    text: '使用手册',
    link: '/handbook/',
  },
  {
    text: '互联',
    link: '/open-platform/',
  },
  {
    text: '协议',
    link: '/privacy/',
  },
  {
    text: '关于',
    link: '/about/',
  },
];

const sideBar: DefaultTheme.Sidebar = {
  '/handbook/': [
    {
      text: '使用手册',
      collapsed: false,
      base: '/handbook/',
      items: [
        {
          text: '简介',
          link: 'index',
        },
        {
          text: '状态',
          link: 'status',
        },
        {
          text: '课程',
          link: 'course',
        },
        {
          text: '图书馆',
          link: 'library',
        },
        {
          text: '成绩',
          link: 'score',
        },
        {
          text: '运动场馆',
          link: 'sport',
        },
        {
          text: '珞珈E卡',
          link: 'pay',
        },
        {
          text: '日程',
          link: 'schedule',
        },
        {
          text: '校车',
          link: 'bus',
        },
        {
          text: '自动化',
          link: 'automatic',
        },
        {
          text: '同步',
          link: 'sync',
        },
        {
          text: '问题反馈',
          link: 'bugfix',
        },
      ],
    },
  ],
  '/open-platform/': [
    {
      text: '互联',
      collapsed: false,
      base: '/open-platform/',
      items: [
        {
          text: '概述',
          link: 'index',
        },
        {
          text: '接入指南',
          link: 'oauth2-guide',
        },
      ],
    },
  ],
  '/privacy/': [
    {
      text: '协议',
      collapsed: false,
      base: '/privacy/',
      items: [
        {
          text: '隐私政策',
          link: 'index',
        },
        {
          text: '用户协议',
          link: 'user-policy',
        },
      ],
    },
  ],
};

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '',
  themeConfig: {
    nav: nav,
    sidebar: sideBar,
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
    outline: {
      label: '本页目录',
    },
    lastUpdated: {
      text: '最近更新',
    },
    returnToTopLabel: '返回顶部',
    lightModeSwitchTitle: '切换到浅色主题',
    darkModeSwitchTitle: '切换到深色主题',
    langMenuLabel: '切换语言',
    editLink: {
      pattern:
        'https://github.com/whu-ham/whu-ham.github.io/edit/main/docs/src/:path',
      text: '编辑此页',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
});

export const zhSearch: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  root: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索',
        buttonAriaLabel: '搜索',
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消',
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接',
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者',
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈',
        },
      },
    },
  },
};
