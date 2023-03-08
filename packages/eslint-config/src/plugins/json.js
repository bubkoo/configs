module.exports = {
  plugins: ['json-format'],
  extends: [
    'plugin:json/recommended',
    'plugin:jsonc/recommended-with-json',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:jsonc/recommended-with-json5',
    'plugin:jsonc/prettier',
    'plugin:json-schema-validator/recommended',
  ],
  rules: {},
}
