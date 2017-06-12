const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PATHS = require('../config/paths')
const pageCfg = require('../config/pageCfg')
const htmlCfg = require('../config/htmlCfg')

const cfg = {
  entry: pageCfg.entrys,
  output: {
    path: PATHS.DIST_PATH,
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: PATHS.DIST_PATH
  }
}

cfg.plugins = cfg.plugins.concat(htmlCfg)

module.exports = cfg
