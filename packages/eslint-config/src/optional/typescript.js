import pluginTS from 'typescript-eslint'
import { overrideName } from '../constants.js'

const name = 'typescript-eslint/recommended'
const configs = pluginTS.configs.recommended
const files = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts']

export default [
  ...configs.map(config => ({ ...config, files })),
  {
    files,
    name: `${name}/${overrideName}`,
    rules: {
      '@typescript-eslint/lines-between-class-members': 0,
      '@typescript-eslint/no-unused-expressions': [
        2,
        { allowShortCircuit: true, allowTernary: true },
      ],
      '@typescript-eslint/no-namespace': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/no-empty-interface': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/no-shadow': 0,
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/no-use-before-define': 0,
      '@typescript-eslint/no-useless-constructor': 0,
      '@typescript-eslint/no-unused-vars': [
        2,
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-redeclare': [2, { ignoreDeclarationMerge: true }],
    },
  },
]
