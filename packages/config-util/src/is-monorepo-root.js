const fs = require('fs')
const path = require('path')
const readJson = require('./read-json')

module.exports = function (dir) {
  const lerna = path.join(dir, 'lerna.json')
  if (fs.existsSync(lerna)) {
    return true
  }

  const pnpm = path.join(dir, 'pnpm-workspace.yaml')
  if (fs.existsSync(pnpm)) {
    return true
  }

  const pkgPath = path.join(dir, 'package.json')
  const pkg = readJson(pkgPath)
  if (pkg.workspaces || pkg.bolt) {
    return true
  }

  return false
}
