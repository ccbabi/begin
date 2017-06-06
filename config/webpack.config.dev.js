const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PATHS = require('./paths')
const entrys = require('./getEntrys')

module.exports = {
  entry: entrys,
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
    }),
    new HtmlWebpackPlugin({
      filename: 'html/[name].html',
      template: '/Users/wangjie/learn/begin/src/pages/page1/index.ejs',
      chunks: ['manifest', 'vendor', 'page1'],
      minify: {
        removeComments: true
      }
    })
  ],
  devServer: {
    contentBase: PATHS.DIST_PATH
  }
}
