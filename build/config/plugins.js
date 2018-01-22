const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { pages } = require('./pages')

const htmlWebpackPlugins = pages.map(pageItem => new HtmlWebpackPlugin({
  filename: `html/${pageItem.page}.html`,
  template: pageItem.template,
  inject: pageItem.entryExists,
  chunks: [pageItem.page],
  minify: {
    removeComments: true
  }
}))

// TODO 加入引导页

const plugins = [
  ...htmlWebpackPlugins,
  new webpack.ProvidePlugin({
    $: 'jquery'
  }),
  new ExtractTextPlugin({
    filename: 'css/[name].css',
    disable: process.env.NODE_ENV === 'development'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
]

module.exports = plugins
