const path = require('path')
const fs = require('fs')
const glob = require('glob')
const { at, atSrc } = require('../utils/at')

const templates = glob.sync(atSrc(`pages/**/*.html`))

const pages = templates.reduce((templates, template) => {
  const entry = at(template, '../index.js')
  const dirname = path.dirname(entry)
  const page = dirname.slice(dirname.lastIndexOf(path.sep) + 1)
  let entryExists = false

  if (fs.existsSync(entry)) entryExists = true
  templates.push({ page, entry, template, entryExists })
  return templates
}, [])

module.exports = pages
