const { hasAnyDeps } = require('@bubkoo/config-util')

const deps = hasAnyDeps(['typescript'])
const plugins = ['prettier-plugin-packagejson']
if (deps.typescript) {
  plugins.push('prettier-plugin-organize-imports')
}

module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 80,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  proseWrap: 'never',
  endOfLine: 'auto',
  plugins,
  overrides: [
    { files: '.eslintrc', options: { parser: 'json' } },
    { files: '.prettierrc', options: { parser: 'json' } },
    { files: '.stylelintrc', options: { parser: 'json' } },
    { files: 'package*.json', options: { printWidth: 1000 } },
    { files: '*.yml', options: { singleQuote: false } },
  ],
}
