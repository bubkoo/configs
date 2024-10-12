import { initConfig } from '@bubkoo/config-util'

const configContent = `module.exports = require('@bubkoo/eslint-config')`.trim()

initConfig('eslint.config.mjs', `${configContent}\n`)
