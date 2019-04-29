module.exports = {
  title: '军火库',
  base: '/arsenal/',
  description: '军火库',
  dest: './arsenal',   // 设置输出目录
  themeConfig: {
    nav: [
      { text: 'Vue 移动端独立组件', link: '/' },
      { text: 'Vue CubicUI 库', link: '/pages/cb-ui/' },
      { text: '纯 CSS 图标', link: '/pages/css-icon/' },
    ],
    sidebar: [
      '/pages/independent-component/select/',
      '/pages/independent-component/popup/',
      '/pages/independent-component/loading/',
      '/pages/independent-component/dialog/',
      '/pages/independent-component/toast/',
    ]
  }
}
