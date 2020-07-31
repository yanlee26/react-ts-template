const proxy = require('http-proxy-middleware')
// https://www.jianshu.com/p/a248b146c55a

module.exports = function(app) {
  app.use(
    // proxy('http://localhost:2000')

    proxy('/api', {
      target: `http://localhost:${process.env.PORT}/api`,
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}
