#!/usr/bin/env node

const { mkfile } = require('../config-util/src')

const configFile = '.prettierrc.js'
const ignoreFile = '.prettierignore'
const configContent = `module.exports = require('@bubkoo/prettier-config')`
const ignoreContent = [
  '*.md',
  '*.sh',
  '*.yml',
  '*.svg',
  '*.gif',
  '*.log',
  '.DS_Store',
  'CNAME',
  'AUTHORS',
  'LICENSE',
  'es/',
  'lib/',
  'dist/',
  'coverage/',
].join('\n')

mkfile(configFile, `${configContent}\n`)
mkfile(ignoreFile, `${ignoreContent}\n`)
