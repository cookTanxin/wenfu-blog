module.exports = {
  name: 'Wenfu',
  title: 'Wenfu',
  description: '一个随时失业的前端。',
  avatar: '/avatar.png',
  logo: '/logo.svg',
  siteUrl: 'https://blog.wenfu.site',
  // icon 请在 src/components/Profile.tsx 中修改
  links: [
    { name: 'GitHub', link: 'https://github.com/cookTanxin' },
    { name: 'RSS', link: '/feed.xml' },
  ],
  friends: [
    { name: '谷歌', link: 'https://www.google.com' },
    { name: 'github', link: 'https://www.github.com' },
    { name: '百度', link: 'https://www.baidu.com' },
  ],
  // en | zh-CN
  language: 'zh-CN',
  // 侧边目录
  toc: true,
  // 显示上一篇下一篇按钮
  adjacentPosts: true,
  // 配置文章过时提醒阈值
  outdatedPostThresholdDays: 90,
  markdown: {
    // 统一配置 CodeBlock 是否显示行号，也可以在 frontmatter 中通过 lineNumbers 字段单独设置
    lineNumbers: false,
  },
  backToTopButton: true
}
