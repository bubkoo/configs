import yml from 'eslint-plugin-yml'
import { overrideName } from '../constants.js'

const name = 'eslint-plugin-yml/recommended'
const configs = yml.configs['flat/recommended']

export default [
  ...configs.map(config => ({
    ...config,
    name: config.name || name,
  })),
  {
    name: `${name}/${overrideName}`,
    rules: {
      'yml/no-irregular-whitespace': 'off',
    },
  },
]
