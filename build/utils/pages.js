const path = require('path')
const fs = require('fs')
const PATHS = require('./paths')

const pagesPath = path.join(PATHS.SRC_PATH, 'pages')

const pageNames = fs.readdirSync(pagesPath).filter(pageName => {
  const pagePath = path.join(pagesPath, pageName)
  return fs.statSync(pagePath).isDirectory()
})

const cfg = {
  entrys: {},
  template: {}
}
pageNames.forEach(pageName => {
  const baseDir = path.join(pagesPath, pageName)
  cfg.entrys[pageName] = path.join(baseDir, 'index.js')
  cfg.template[pageName] = path.join(baseDir, 'index.html')
})

module.exports = cfg
