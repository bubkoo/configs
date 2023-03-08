import fs from 'node:fs'
import path from 'node:path'
import { readJson } from './read-json'

export function isMonorepoRoot(dir: string) {
  const lerna = path.join(dir, 'lerna.json')
  if (fs.existsSync(lerna)) {
    return true
  }

  const pnpm = path.join(dir, 'pnpm-workspace.yaml')
  if (fs.existsSync(pnpm)) {
    return true
  }

  const packagePath = path.join(dir, 'package.json')
  const pkg = readJson<any>(packagePath)
  if (pkg.workspaces || pkg.bolt) {
    return true
  }

  return false
}
