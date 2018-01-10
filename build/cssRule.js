const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      use: {
        loader: "css-loader",
        options: {
          sourceMap: true
        }
      },
      fallback: "style-loader"
    })
  },
  {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
      use: [
        {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        },
        {
          loader: "less-loader",
          options: {
            sourceMap: true
          }
        }
      ],
      fallback: "style-loader"
    })
  },
  {
    test: /\.styl$/,
    use: ExtractTextPlugin.extract({
      use: [
        {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        },
        {
          loader: "stylus-loader",
          options: {
            sourceMap: true
          }
        }
      ],
      fallback: "style-loader"
    })
  }
];
