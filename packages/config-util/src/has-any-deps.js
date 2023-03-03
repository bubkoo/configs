const fs = require('fs')
const path = require('path')
const isMonorepoRoot = require('./is-monorepo-root')
const readJson = require('./read-json')

function anyDeps(modules, pkgJsonPath) {
  const pkgJson = readJson(pkgJsonPath)
  const deps = Object.keys(pkgJson.dependencies || {})
  const devDeps = Object.keys(pkgJson.devDependencies || {})
  const allDeps = deps.concat(devDeps)
  return modules.map((dep) => allDeps.includes(dep))
}

function hasAnyDeps(modules) {
  const cwd = process.cwd()
  const { root } = path.parse(cwd)
  const result = modules.map(() => false)

  let currentPath = cwd
  while (currentPath !== root) {
    const pkgJsonPath = path.join(currentPath, 'package.json')
    if (fs.existsSync(pkgJsonPath)) {
      anyDeps(modules, pkgJsonPath).forEach((item, index) => {
        if (item) {
          result[index] = true
        }
      })

      if (result.every((item) => item === true)) {
        break
      }

      if (isMonorepoRoot(currentPath)) {
        break
      }
    }

    currentPath = path.dirname(currentPath)
  }

  const map = {}
  result.forEach((item, index) => {
    map[modules[index]] = item
  })

  return map
}

module.exports = hasAnyDeps
