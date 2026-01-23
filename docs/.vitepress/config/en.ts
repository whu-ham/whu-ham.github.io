import {defineConfig, DefaultTheme} from 'vitepress';

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Download',
    link: '/en/download/',
  },
  {
    text: 'Handbook',
    link: '/en/handbook/',
  },
  {
    text: 'Privacy',
    link: '/en/privacy/',
  },
  {
    text: 'About',
    link: '/en/about/',
  },
];

const sideBar: DefaultTheme.Sidebar = {
  '/en/handbook/': [
    {
      text: 'Handbook',
      collapsed: false,
      base: '/en/handbook/',
      items: [
        {
          text: 'Overview',
          link: 'index',
        },
        {
          text: 'Status',
          link: 'status',
        },
        {
          text: 'Courses',
          link: 'course',
        },
        {
          text: 'Library',
          link: 'library',
        },
        {
          text: 'Grades',
          link: 'score',
        },
        {
          text: 'Sports Facilities',
          link: 'sport',
        },
        {
          text: 'Campus Card',
          link: 'pay',
        },
        {
          text: 'Schedule',
          link: 'schedule',
        },
        {
          text: 'Shuttle',
          link: 'bus',
        },
        {
          text: 'Automation',
          link: 'automatic',
        },
        {
          text: 'Sync',
          link: 'sync',
        },
        {
          text: 'Feedback',
          link: 'bugfix',
        },
      ],
    },
  ],
  '/en/privacy/': [
    {
      text: 'Privacy',
      collapsed: false,
      base: '/en/privacy/',
      items: [
        {
          text: 'Privacy Policy',
          link: 'index',
        },
        {
          text: 'User Agreement',
          link: 'user-policy',
        },
      ],
    },
  ],
};

export const en = defineConfig({
  lang: 'en-US',
  description: '',
  themeConfig: {
    nav: nav,
    sidebar: sideBar,
    outlineTitle: 'On this page',
    lastUpdatedText: 'Last updated',
    returnToTopLabel: 'Return to top',
    editLink: {
      pattern: 'https://github.com/whu-ham',
      text: 'Edit this page',
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page',
    },
  },
});

export const enSearch: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  en: {
    placeholder: 'Search docs',
    translations: {
      button: {
        buttonText: 'Search',
        buttonAriaLabel: 'Search',
      },
      modal: {
        searchBox: {
          resetButtonTitle: 'Clear query',
          resetButtonAriaLabel: 'Clear query',
          cancelButtonText: 'Cancel',
          cancelButtonAriaLabel: 'Cancel',
        },
        startScreen: {
          recentSearchesTitle: 'Recent',
          noRecentSearchesText: 'No recent searches',
          saveRecentSearchButtonTitle: 'Save to recent',
          removeRecentSearchButtonTitle: 'Remove from recent',
          favoriteSearchesTitle: 'Favorites',
          removeFavoriteSearchButtonTitle: 'Remove from favorites',
        },
        errorScreen: {
          titleText: 'Unable to fetch results',
          helpText: 'You may need to check your network connection',
        },
        footer: {
          selectText: 'Select',
          navigateText: 'Navigate',
          closeText: 'Close',
          searchByText: 'Search provider',
        },
        noResultsScreen: {
          noResultsText: 'No results for',
          suggestedQueryText: 'Try searching for',
          reportMissingResultsText: 'Think this query should return results?',
          reportMissingResultsLinkText: 'Let us know',
        },
      },
    },
  },
};
