const HtmlWebpackPlugin = require("html-webpack-plugin");
const pageCfg = require("./pageCfg");

const cfg = Object.keys(pageCfg.template).map(key => {
  return new HtmlWebpackPlugin({
    filename: `html/${key}.html`,
    template: pageCfg.template[key],
    chunks: ["manifest", "vendor", key],
    minify: {
      removeComments: true
    }
  });
});
module.exports = cfg;
