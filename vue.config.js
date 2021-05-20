module.exports = {

  transpileDependencies: [
    'vuetify',
  ],
  publicPath: process.env.NODE_ENV === 'production'
  ? '/'
  : '/',
  devServer: {
    port: 8081,
    open: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true, // 配置跨域
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: '',
        },
      },

  },
    // before: require('./mock/mock-server.js')

  },
}
