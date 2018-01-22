const webpack = require('webpack')
const merge = require('webpack-merge')
const ReloadPlugin = require('reload-html-webpack-plugin')
const webpackBaseConfig = require('./webpack.config.base')
const plugins = require('../config/plugins')
const { atCmd } = require('../utils/at')

const webpackDevConfig = merge(webpackBaseConfig, {
  plugins: [
    new ReloadPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ].concat(plugins),
  devtool: 'eval-source-map',
  devServer: {
    contentBase: atCmd('dist'),
    host: '0.0.0.0',
    port: 12345,
    inline: true,
    hot: true,
    index: 'index.html',
    openPage: 'html',
    overlay: {
      warnings: true,
      errors: true,
      historyApiFallback: true,
      noInfo: true
    },
    useLocalIp: true,
    watchContentBase: true
  }
})

module.exports = webpackDevConfig
