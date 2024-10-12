import stylistic from '@stylistic/eslint-plugin'
import { overrideName } from '../constants.js'

const name = '@stylistic/eslint-plugin/recommended'

export default [
  {
    ...stylistic.configs['recommended-flat'],
    name,
  },
  {
    name: `${name}/${overrideName}`,
    rules: {
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/operator-linebreak': ['error', 'after'],
    },
  },
]
