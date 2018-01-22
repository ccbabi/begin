const ExtractTextPlugin = require('extract-text-webpack-plugin')

const baseLoaders = [{
  loader: 'css-loader',
  options: {
    importLoaders: 1
  }
}
/*
, {
  loader: 'postcss-loader'
}
*/
]

module.exports = genCssUse

function genCssUse (loaderName) {
  let loaders

  if (loaderName !== 'css') {
    loaders = baseLoaders.concat({
      loader: `${loaderName}-loader`
    })
  } else {
    loaders = baseLoaders.concat()
  }

  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'style-loader'
  })
}
