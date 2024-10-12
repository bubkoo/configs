import { initConfig } from '@bubkoo/config-util'

const configFileName = 'eslint.config'
const configContent = `module.exports = require('@bubkoo/eslint-config')`.trim()

initConfig(configFileName, `${configContent}\n`, [
  `${configFileName}.js`,
  `${configFileName}.cjs`,
  `${configFileName}.mjs`,
])
