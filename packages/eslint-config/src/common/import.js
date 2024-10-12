import importPlugin from 'eslint-plugin-import'
import { overrideName } from '../constants.js'

const name = 'eslint-plugin-import/recommended'

export default [
  {
    ...importPlugin.flatConfigs.recommended,
    name,
  },
  {
    name: `${name}/${overrideName}`,
    rules: {
      'import/export': 'off',
      'import/no-cycle': 'off',
      'import/namespace': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
]
