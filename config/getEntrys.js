const path = require('path')
const fs = require('fs')
const PATHS = require('./paths')

const pagesPath = path.join(PATHS.SRC_PATH, 'pages')

const pageNames = fs.readdirSync(pagesPath).filter(pageName => {
  const pagePath = path.join(pagesPath, pageName)
  return fs.statSync(pagePath).isDirectory()
})

const entrys = {}
pageNames.forEach(pageName => {
  entrys[pageName] = path.join(pagesPath, pageName, 'index.js')
})
console.log(entrys)
module.exports = entrys
