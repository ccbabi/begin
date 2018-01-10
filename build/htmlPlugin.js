const HtmlWebpackPlugin = require("html-webpack-plugin");
const pages = require("../utils/pages");

const plugins = Object.keys(pages.template).map(key => {
  return new HtmlWebpackPlugin({
    filename: `html/${key}.html`,
    template: pages.template[key],
    chunks: ["manifest", "vendor", key],
    minify: {
      removeComments: true
    }
  });
});
module.exports = plugins;
