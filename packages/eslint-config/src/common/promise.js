import pluginPromise from 'eslint-plugin-promise'
import { overrideName } from '../constants.js'

const name = 'eslint-plugin-promise/recommended'

export default [
  {
    ...pluginPromise.configs['flat/recommended'],
    name,
  },
  {
    name: `${name}/${overrideName}`,
    rules: {
      'promise/always-return': 'off',
      'promise/catch-or-return': 'off',
      'promise/no-return-wrap': ['error', { allowReject: true }],
    },
  },
]
