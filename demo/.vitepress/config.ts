import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
import sidebarDocs from './sidebar-docs'
import sidebarComps from './sidebar-comps'

const baseUrl = process.env.NODE_ENV === 'production' ? '/bin-grid-layout/' : '/'
const linkBase = 'https://wangbin3162.github.io'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: baseUrl,
  outDir: '../docs',
  title: 'bin-grid-layout',
  description: 'A Compontnts Lib for Vue3',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `${baseUrl}favicon.ico`
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'bin-grid-layout',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档', link: '/docs/installation', activeMatch: '/docs/' },
      { text: '示例', link: '/components/01-basic', activeMatch: '/components/' },
      {
        text: '生态系统',
        items: [
          { text: '资源', link: '' },
          { text: 'bin-admin-pro', link: `${linkBase}/bin-admin-pro/`, target: '_blank' },
          { text: 'bin-datav', link: `${linkBase}/bin-datav`, target: '_blank' },
          { text: 'bin-datav-schema', link: `${linkBase}/bin-datav-schema/`, target: '_blank' },
          { text: '官方库v3', link: '' },
          { text: 'bin-ui-design', link: `${linkBase}/bin-ui-design/`, target: '_blank' },
          { text: 'bin-editor-next', link: `${linkBase}/bin-editor-next/`, target: '_blank' },
          { text: 'bin-charts-next', link: `${linkBase}/bin-charts-next/`, target: '_blank' },
          { text: '官方库v2', link: '' },
          { text: 'bin-ui', link: `${linkBase}/bin-ui/`, target: '_blank' },
          { text: 'bin-ace-editor', link: `${linkBase}/bin-ace-editor/`, target: '_blank' },
          { text: 'bin-charts', link: `${linkBase}/bin-charts/`, target: '_blank' },
          { text: 'bin-tree-org', link: `${linkBase}/bin-tree-org/`, target: '_blank' },
          { text: '动画库', link: '' },
          { text: 'bin-animation', link: `${linkBase}/bin-animation/`, target: '_blank' },
          {
            text: 'bin-keyframe-animation',
            link: `${linkBase}/bin-keyframe-animation/`,
            target: '_blank'
          }
        ]
      }
    ],

    sidebar: {
      '/docs/': sidebarDocs,
      '/components/': sidebarComps
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/wangbin3162/bin-grid-layout' }],

    footer: {
      copyright: 'MIT Licensed | Copyright © 2023-present bin-grid-layout'
    }
  },
  markdown: {
    theme: {
      light: 'slack-ochin',
      dark: 'rose-pine-moon'
    },
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  vite: {
    server: {
      host: '0.0.0.0',
      port: 9004,
      open: true
    },
    resolve: {
      alias: {
        'bin-grid-layout': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  }
})

// https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
// export type Theme =
//   | 'css-variables',
//   | 'dark-plus',
//   | 'dracula-soft',
//   | 'dracula',
//   | 'github-dark-dimmed',
//   | 'github-dark',
//   | 'github-light',
//   | 'hc_light',
//   | 'light-plus',
//   | 'material-theme-darker',
//   | 'material-theme-lighter',
//   | 'material-theme-ocean',
//   | 'material-theme-palenight',
//   | 'material-theme',
//   | 'min-dark',
//   | 'min-light',
//   | 'monokai',
//   | 'nord',
//   | 'one-dark-pro',
//   | 'poimandres',
//   | 'rose-pine-dawn',
//   | 'rose-pine-moon',
//   | 'rose-pine',
//   | 'slack-dark',
//   | 'slack-ochin',
//   | 'solarized-dark',
//   | 'solarized-light',
//   | 'vitesse-dark',
//   | 'vitesse-light',
