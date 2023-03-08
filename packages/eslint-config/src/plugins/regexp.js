module.exports = {
  plugins: ['regexp'],
  extends: ['plugin:regexp/recommended'],
  rules: {
    // Conflicting with `unicorn/better-regex`
    'regexp/sort-character-class-elements': 'off',

    // Conflicting with `unicorn/better-regex`
    'regexp/match-any': ['error', { allows: ['dotAll', '[\\S\\s]'] }],

    // Conflicting with `unicorn/better-regex`
    'regexp/strict': 'off',
  },
}
