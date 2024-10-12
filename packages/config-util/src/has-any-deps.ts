import fs from 'node:fs'
import path from 'node:path'
import { isMonorepoRoot } from './is-monorepo-root'
import { isRepoRoot } from './is-repo-root'
import { readJson } from './read-json'

function anyDeps(modules: string[], packageJsonPath: string) {
  const packageJson = readJson<any>(packageJsonPath)
  const deps = packageJson.dependencies
    ? Object.keys(packageJson.dependencies)
    : []
  const devDeps = packageJson.devDependencies
    ? Object.keys(packageJson.devDependencies)
    : []
  const allDeps = new Set([...deps, ...devDeps])
  return modules.map(dep => allDeps.has(dep))
}

export function hasAnyDeps(modules: string[]) {
  const cwd = process.cwd()
  const { root } = path.parse(cwd)
  const arr = modules.map(() => false)
  let currentPath = cwd
  while (currentPath !== root) {
    const packageJsonPath = path.join(currentPath, 'package.json')
    if (fs.existsSync(packageJsonPath)) {
      const deps = anyDeps(modules, packageJsonPath)
      for (let i = 0; i < deps.length; i++) {
        if (deps[i]) {
          arr[i] = true
        }
      }

      if (arr.every(item => item === true)) {
        break
      }

      if (isMonorepoRoot(currentPath) || isRepoRoot(currentPath)) {
        break
      }
    }

    currentPath = path.dirname(currentPath)
  }

  const result: { [key: string]: boolean } = {}
  for (let i = 0; i < arr.length; i++) {
    result[modules[i]] = arr[i]
  }

  return result
}
