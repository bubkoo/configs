#!/usr/bin/env node

const { mkfile } = require('@bubkoo/config-util')

const configFile = '.eslintrc'
const ignoreFile = '.eslintignore'
const configContent = `
{
  "extends": "@bubkoo/eslint-config"
}
`.trim()
const ignoreContent = [
  'node_modules',
  '*.min.js',
  'es/**',
  'lib/**',
  'dist/**',
].join('\n')

mkfile(configFile, `${configContent}\n`)
mkfile(ignoreFile, `${ignoreContent}\n`)
