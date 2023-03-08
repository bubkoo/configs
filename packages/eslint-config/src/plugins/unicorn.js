module.exports = {
  plugins: ['unicorn'],
  extends: ['plugin:unicorn/recommended'],
  rules: {
    'unicorn/filename-case': ['warn', { case: 'kebabCase' }],
    'unicorn/prefer-module': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkFilenames: false,
        checkVariables: false,
      },
    ],
  },
}
