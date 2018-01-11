const genCssUse = require('./genCssUse')

const loadToExtMap = { css: /\.css$/, less: /\.less$/, stylus: /.styl$/ }
const cssRule = []

for (let [ loaderName, ext ] of Object.entries(loadToExtMap)) {
  cssRule.push({ test: ext, use: genCssUse(loaderName) })
}

module.exports = cssRule
