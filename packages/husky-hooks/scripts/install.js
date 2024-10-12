import husky from 'husky'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

if (process.env.CI !== undefined || process.env.NODE_ENV === 'production') {
  console.log('CI or production environment, skipping husky installation.')
  process.exit(0)
}

if (process.env.INIT_CWD !== undefined) {
  process.chdir(process.env.INIT_CWD)
}

const filename = fileURLToPath(import.meta.url)
const hooksDir = path.resolve(path.dirname(filename), '../hooks')
husky(hooksDir)
