const { initConfig } = require('@bubkoo/config-util')

const filename = '.prettierrc'
const configFile = `${filename}.js`
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

initConfig(ignoreFile, `${ignoreContent}\n`)
initConfig(
  configFile,
  `${configContent}\n`,
  [
    filename,
    `${filename}.js`,
    `${filename}.cjs`,
    `${filename}.json`,
    `${filename}.json5`,
    `${filename}.yaml`,
    `${filename}.yml`,
    `${filename}.toml`,
    'prettier.config.js',
    'prettier.config.cjs',
  ],
  'prettier',
)
