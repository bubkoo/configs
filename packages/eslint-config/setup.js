import { initConfig } from '@bubkoo/config-util'

const configContent = `
import { config } from '@bubkoo/eslint-config'

export default config([
  {
    files: ['**/*.js', '**/*.ts'],
  },
  {
    rules: {
    },
  },
])
`.trim()

initConfig('eslint.config.mjs', `${configContent}\n`)
