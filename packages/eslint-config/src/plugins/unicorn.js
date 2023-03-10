module.exports = {
  plugins: ['unicorn'],
  extends: ['plugin:unicorn/recommended'],
  rules: {
    'unicorn/prefer-module': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-array-callback-reference': 'warn',

    'unicorn/expiring-todo-comments': 'warn',
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
}
