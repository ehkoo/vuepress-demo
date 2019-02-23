module.exports = {
  base: '/vuepress-demo/',
  title: 'VuePress Blog Demo',
  description: 'A simple blog built with VuePress - by Ehkoo',
  dest: 'docs',
  themeConfig: {
    nav: [
      { text: 'Trang Chủ', link: '/' },
      { text: 'Giới Thiệu', link: '/about/' },
      { text: 'Ehkoo', link: 'https://ehkoo.com' },
    ],
    displayAllHeaders: true,
    sidebar: 'auto'
  }
}
