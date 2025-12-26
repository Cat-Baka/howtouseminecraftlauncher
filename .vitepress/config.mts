import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Minecraft游玩教程",
  description: "by Cat_Baka",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '服务器推荐', link: '/' },
      { text: '电脑游玩教程', link: '/docs/pc/1.启动器.md' },
      { text: '手机游玩教程', link: '/docs/phone/1.启动器.md' }
    ],

    sidebar: [
      {
        text: '电脑游玩教程',
        items: [
          { text: '启动器使用', link: '/docs/pc/1.启动器.md' },
          { text: '模组,材质等安装', link: '/docs/pc/2.模组地图安装.md' }
        ]
      },
      {
        text: '手机游玩教程',
        items: [
          { text: '启动器使用', link: '/docs/phone/1.启动器.md' },
          { text: '模组,材质等安装', link: '/docs/phone/2.模组地图安装.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cat-Baka/howtouseminecraftlauncher' }
    ]
  }
})
