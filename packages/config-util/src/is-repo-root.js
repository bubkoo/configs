const fs = require('fs')
const path = require('path')

module.exports = function (dir) {
  // git/gitlab
  const gitdir = path.join(dir, '.git')
  if (fs.existsSync(gitdir)) {
    return true
  }

  // svn
  const svndir = path.join(dir, '.svg')
  if (fs.existsSync(svndir)) {
    return true
  }

  // npm
  const pkgJsonLockPath = path.join(dir, 'package-lock.json')
  if (fs.existsSync(pkgJsonLockPath)) {
    return true
  }

  // pnpm
  const pnpmLockPath = path.join(dir, 'pnpm-lock.yaml')
  if (fs.existsSync(pnpmLockPath)) {
    return true
  }

  // yarn
  const yarnLockPath = path.join(dir, 'yarn.lock')
  if (fs.existsSync(yarnLockPath)) {
    return true
  }
}
