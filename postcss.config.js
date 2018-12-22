module.exports = {
  plugins: {
    "autoprefixer": {},
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": { utf8: false },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750, // 视窗宽度，对应设计稿，一般是750
      unitPrecision: 3, // 指定px转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类
      minPixelValue: 1, // 小于或等于1px不转换为视窗单位
      mediaQuery: false // 允许在媒体查询中转换px
    },
    "postcss-viewport-units": {},
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
}
