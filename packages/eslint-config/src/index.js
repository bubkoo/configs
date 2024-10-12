import common from './common/index.js'
import globals from './globals.js'
import optional from './optional/index.js'

const pkgName = '@bubkoo/eslint-config'

const configs = [
  {
    name: `${pkgName}/ignores`,
    ignores: ['**/node_modules/', '**/es/', '**/lib/', '**/dist/'],
  },
  {
    name: `${pkgName}/languages`,
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {
        ...globals,
      },
    },
  },
  ...common,
  ...optional,
  {
    name: `${pkgName}/recommended`,
    rules: {
      camelcase: 'off',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'max-classes-per-file': 'off',
      'prefer-destructuring': 'off',
      'class-methods-use-this': 'off',
      'implicit-arrow-linebreak': 'off',
      'lines-between-class-members': 'off',
      'consistent-return': 'off',
      'func-names': ['warn', 'never', { generators: 'as-needed' }],
      'no-bitwise': 'off',
      'no-continue': 'off',
      'no-lonely-if': 'off',
      'no-multi-assign': 'off',
      'no-nested-ternary': 'off',
      'no-inner-declarations': 'off',
      'no-unused-expressions': 'off',
      'no-return-assign': ['error', 'except-parens'],
      'no-param-reassign': ['error', { props: false }],
      'no-cond-assign': ['error', 'except-parens'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-shadow': 'off',
      'no-use-before-define': 'off',
      'no-useless-constructor': 'off',
      'no-unused-vars': 'off',
      'no-redeclare': 'off',
      'no-restricted-syntax': [
        'error',
        'WithStatement',
        'BinaryExpression[operator="in"]',
      ],
    },
  },
]

export function config(c) {
  return Array.isArray(c) ? [...configs, ...c] : [...configs, c]
}

export default configs
