const PATHS = require('../utils/paths')
const pages = require('../utils/pages')
const htmlPlugin = require('./htmlPlugin')
const cssRule = require('./cssRule')
const commonPlugin = require('./commonPlugin')

module.exports = {
  entry: pages.entrys,
  output: {
    path: PATHS.DIST_PATH,
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [].concat(cssRule)
  },
  plugins: [].concat(commonPlugin, htmlPlugin),
  performance: {
    hints: false
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: PATHS.DIST_PATH
    // noInfo: true
  }
}
