import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactHookPlugin from 'eslint-plugin-react-hooks'

import { overrideName } from '../constants.js'

export default [
  {
    ...jsxA11yPlugin.flatConfigs.recommended,
    name: 'eslint-plugin-jsx-a11y/recommended',
  },
  {
    ...reactPlugin.configs.flat.recommended,
    name: 'eslint-plugin-react/recommended',
  },
  {
    name: `eslint-plugin-react/recommended/${overrideName}`,
    rules: {
      'react/sort-comp': 0,
      'react/prop-types': 0,
      'react/jsx-props-no-spreading': 0,
      'react/destructuring-assignment': 0,
      'react/no-access-state-in-setstate': 0,
    },
  },
  {
    ...reactHookPlugin.configs.recommended,
    name: 'eslint-plugin-react-hooks/recommended',
  },
]
