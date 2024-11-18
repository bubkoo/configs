import pluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import { overrideName } from '../constants.js'

const name = 'eslint-plugin-unicorn/recommended'

export default [
  {
    name: name,
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {
      unicorn: pluginUnicorn,
    },
  },
  {
    name: `${name}/${overrideName}`,
    rules: {
      'unicorn/prefer-module': 'off',
      'unicorn/no-process-exit': 'off',
      'unicorn/no-for-loop': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-array-callback-reference': 'warn',

      'unicorn/consistent-function-scoping': 'warn',
      'unicorn/filename-case': ['warn', { case: 'kebabCase' }],

      'unicorn/prevent-abbreviations': [
        'error',
        {
          checkFilenames: false,
          checkVariables: false,
        },
      ],
    },
  },
]
