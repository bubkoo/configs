import * as regexpPlugin from 'eslint-plugin-regexp'
import { overrideName } from '../constants.js'

const name = 'eslint-plugin-regex/recommended'

export default [
  {
    ...regexpPlugin.configs['flat/recommended'],
    name,
    rules: {},
  },
  {
    name: `${name}/${overrideName}`,
    rules: {
      // Conflicting with `unicorn/better-regex`
      'regexp/sort-character-class-elements': 'off',

      // Conflicting with `unicorn/better-regex`
      'regexp/match-any': ['error', { allows: ['dotAll', '[\\S\\s]'] }],

      // Conflicting with `unicorn/better-regex`
      'regexp/strict': 'off',
    },
  },
]
