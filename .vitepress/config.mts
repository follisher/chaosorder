import { defineConfig } from 'vitepress'
const base = process.env.SITE_BASE || '/'
export default defineConfig({
  base,
  lang: 'zh-CN', title: '混沌与秩序 ChaosOrder',
  description: '探索传统术数与星象的数字工具。汇集八字、紫微斗数、奇门遁甲、大六壬、七政四余与古籍阅读，获取 Android 与 iOS 版本。',
  head: [['link', { rel: 'icon', href: `${base}app-icon.png` }], ['meta', { property: 'og:title', content: '混沌与秩序 · 于混沌中，见万象之序' }], ['meta', { property: 'og:description', content: '传统术数与星象的数字探索工具。' }], ['meta', { property: 'og:image', content: 'https://follisher.github.io/chaosorder/app-icon.png' }], ['meta', { name: 'theme-color', content: '#131209' }]],
  appearance: false
})
