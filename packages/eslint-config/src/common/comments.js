import pluginComments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import { overrideName } from '../constants.js'

const name = '@eslint-community/eslint-plugin-eslint-comments/recommended'

export default [
  {
    ...pluginComments.recommended,
    name,
  },
  {
    name: `${name}/${overrideName}`,
    rules: {
      '@eslint-community/eslint-comments/no-unused-disable': 'warn',
      '@eslint-community/eslint-comments/disable-enable-pair': [
        'error',
        { allowWholeFile: true },
      ],
    },
  },
]
