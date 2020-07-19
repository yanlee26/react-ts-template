const { override, addLessLoader, fixBabelImports } = require('customize-cra')
const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const rewiredSourceMap = () => (config) => {
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false
  return config
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    // https://antd-live-theme.firebaseapp.com/
    modifyVars: {
      '@primary-color': '#13c2c2'
    },
    javascriptEnabled: true,
  }),
  // addWebpackPlugin(
    // new BundleAnalyzerPlugin(),
  // ),
  rewiredSourceMap()
)
