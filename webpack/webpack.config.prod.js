const webpack = require('webpack')
const PATHS = require('../utils/paths')
const pages = require('../utils/pages')
const htmlPlugin = require('./htmlPlugin')
const cssRule = require('./cssRule')
const commonPlugin = require('./commonPlugin')

module.exports = {
  entry: pages.entrys,
  output: {
    path: PATHS.DIST_PATH,
    filename: 'js/[name]-[chunkhash].js'
  },
  module: {
    rules: [].concat(cssRule)
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ].concat(commonPlugin, htmlPlugin),
  devtool: 'source-map',
  performance: {
    hints: false
  }
}
