import { defineUserConfig, defaultTheme } from 'vuepress'
import 'moment'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'



import { zhThemeConfig } from './config/nav/config'

export default defineUserConfig({
    title: 'Ham',
    base: '/whu-ham/',
    head: [
        ['link', { rel: 'icon', href: 'icon-1024 2.png' }],
        ['link', { rel: 'manifest', href: 'https://whu-ham.github.io/manifest.webmanifest' }]
    ],
    plugins: [
        { name: '@vuepress/last-updated' },
        { name: '@vuepress/active-header-links'},
        // {
        //     transformer: (timestamp, lang) => {
        //         const moment = require('moment')
        //         moment.locale(lang)
        //         return moment(timestamp).fromNow()
        //     }
        // },
        () => registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        docsearchPlugin({
            appId: '92H3AM2QST',
            apiKey: 'c509e924662c649625019c373a234990',
            indexName: 'whu-ham'
        }),
        pwaPlugin({

        }),
        googleAnalyticsPlugin({
            id: 'G-P03RPXXGT4'
        })
    ],
    theme: defaultTheme({
        repo: 'whu-ham/whu-ham.github.io',
        editLink: true,
        docsRepo: 'whu-ham/whu-ham.github.io',
        docsDir: 'docs',
        docsBranch: 'main',
        locales: {
            '/': zhThemeConfig
        }
    })

})
