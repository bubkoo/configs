const { initConfig } = require('@bubkoo/config-util')

const configFile = '.prettierrc'
const ignoreFile = '.prettierignore'
// @see https://prettier.io/docs/en/configuration.html#sharing-configurations
const configContent = `"@bubkoo/prettier-config"`
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
    configFile,
    `${configFile}.js`,
    `${configFile}.cjs`,
    `${configFile}.json`,
    `${configFile}.json5`,
    `${configFile}.yaml`,
    `${configFile}.yml`,
    `${configFile}.toml`,
    'prettier.config.js',
    'prettier.config.cjs',
  ],
  'prettier',
)
