import pluginPrettier from 'eslint-plugin-prettier/recommended'
import { overrideName } from '../constants.js'

const name = 'eslint-plugin-prettier/recommended'

export default [
  {
    ...pluginPrettier,
    name,
  },
  {
    name: `${name}/${overrideName}`,
    rules: {},
  },
]
