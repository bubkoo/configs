module.exports = {
  '*': ['prettier --write --ignore-unknown'],
  '*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --cache --cache-location node_modules/.cache/eslint/.eslintcache --fix',
  ],
}
