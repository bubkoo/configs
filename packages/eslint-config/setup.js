#!/usr/bin/env node

const { initConfig } = require('@bubkoo/config-util')

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

initConfig(ignoreFile, `${ignoreContent}\n`)
initConfig(
  configFile,
  `${configContent}\n`,
  [
    configFile,
    `${configFile}.js`,
    `${configFile}.cjs`,
    `${configFile}.json`,
    `${configFile}.yaml`,
    `${configFile}.yml`,
  ],
  'eslintConfig',
)
