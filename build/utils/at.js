const path = require('path')

const PATH_ROOT = process.cwd()
const PATH_SRC = path.resolve(PATH_ROOT, 'src')

function at () {
  return path.resolve.apply(path, [...arguments])
}

function atCmd (p) {
  return path.resolve(PATH_ROOT, p || '')
}

function atSrc (p) {
  return path.resolve(PATH_SRC, p || '')
}

module.exports = { at, atCmd, atSrc }
