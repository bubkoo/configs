module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 80,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  proseWrap: 'never',
  endOfLine: 'auto',
  overrides: [
    { files: '.eslintrc', options: { parser: 'json' } },
    { files: '.prettierrc', options: { parser: 'json' } },
    { files: '.stylelintrc', options: { parser: 'json' } },
    { files: 'package*.json', options: { printWidth: 1000 } },
    { files: '*.yml', options: { singleQuote: false } },
  ],
}
