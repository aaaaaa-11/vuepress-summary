import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import sidebar from './configs/sidebar.js'


export default defineUserConfig({
  lang: 'zh-CN',
  title: '问题记录文档',
  description: '记录一些开发中遇到的问题和面试问题',
  base: '/vuepress-summary/',
  theme: defaultTheme({
    sidebar
  }),
})
