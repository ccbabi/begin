const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')
const plugins = require('../config/plugins')
const { atCmd } = require('../utils/at')

const webpackProdConfig = merge(webpackBaseConfig, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ].concat(plugins),
  devtool: 'source-map'
})

module.exports = webpackBaseConfig
