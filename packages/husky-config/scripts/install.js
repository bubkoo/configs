#!/usr/bin/env node

import husky from 'husky'
import path from 'path'
import { fileURLToPath } from 'url'

if (process.env.CI !== undefined || process.env.NODE_ENV === 'production') {
  console.log('CI or production environment, skipping husky installation.')
  process.exit(0)
}

if (process.env.INIT_CWD !== undefined) {
  process.chdir(process.env.INIT_CWD)
}

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const hooksDir = path.resolve(dirname, '../hooks')
console.log(hooksDir)
husky.install(hooksDir)
