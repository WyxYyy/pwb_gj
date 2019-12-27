module.exports = {
  devServer: {
    // open: process.platform === 'darwin',
    // host: 'localhost',
    port: 8071,
    // open: true, //配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://192.168.1.107', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
};