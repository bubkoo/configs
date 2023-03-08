const fs = require('fs')
const path = require('path')
const readJson = require('./read-json')
const isRepoRoot = require('./is-repo-root')
const isMonorepoRoot = require('./is-monorepo-root')

function anyDeps(modules, pkgJsonPath) {
  const pkgJson = readJson(pkgJsonPath)
  const deps = pkgJson.dependencies ? Object.keys(pkgJson.dependencies) : []
  const devDeps = pkgJson.devDependencies
    ? Object.keys(pkgJson.devDependencies)
    : []
  const allDeps = deps.concat(devDeps)
  return modules.map((dep) => allDeps.includes(dep))
}

function hasAnyDeps(modules) {
  const cwd = process.cwd()
  const { root } = path.parse(cwd)
  const arr = modules.map(() => false)
  let currentPath = cwd
  while (currentPath !== root) {
    const pkgJsonPath = path.join(currentPath, 'package.json')
    if (fs.existsSync(pkgJsonPath)) {
      anyDeps(modules, pkgJsonPath).forEach((item, index) => {
        if (item) {
          arr[index] = true
        }
      })

      if (arr.every((item) => item === true)) {
        break
      }

      if (isMonorepoRoot(currentPath) || isRepoRoot(currentPath)) {
        break
      }
    }

    currentPath = path.dirname(currentPath)
  }

  const result = {}
  arr.forEach((item, index) => {
    result[modules[index]] = item
  })

  return result
}

module.exports = hasAnyDeps
