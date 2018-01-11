const pages = require('../config/pages')
const cssRule = require('../config/cssRule')
const { atCmd, atSrc } = require('../utils/at')

const entry = pages.reduce((entry, item) => {
  if (item.entryExists) entry[item.page] = item.entry
  return entry
}, {})

const webpackBaseConfig = {
  entry,
  output: {
    path: atCmd('dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      ...cssRule,
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[name].[hash:7].[ext]'
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.styl', '.less', '.css'],
    alias: {
      '@': atSrc()
    }
  },
  performance: {
    hints: false
  }
}

module.exports = webpackBaseConfig
