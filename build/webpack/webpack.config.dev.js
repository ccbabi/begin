const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')
const plugins = require('../config/plugins')
const { atCmd } = require('../utils/at')

const webpackDevConfig = merge(webpackBaseConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ].concat(plugins),
  devtool: 'eval-source-map',
  devServer: {
    contentBase: atCmd('dist'),
    port: 3456
  }
})

module.exports = webpackDevConfig
