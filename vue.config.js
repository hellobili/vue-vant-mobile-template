const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const path = require('path')


function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = 'vue Admin Template' // page title

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      },
      // vant主题自定义 配置文件https://github.com/youzan/vant/blob/dev/src/style/var.less
      less: {
        modifyVars: {
          'font-size-sm': '13px',
          'font-size-md': '15px',
          'font-size-lg': '17px',
          'goods-action-button-danger-color': '#7232dd',
          'goods-action-button-warning-color': '#3eaf7c'
        }
      }
    }
  }
};
