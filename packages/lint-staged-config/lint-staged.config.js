const { hasAnyDeps } = require('@bubkoo/config-util')

const deps = hasAnyDeps(['eslint'])
const handlers = ['prettier --write']
if (deps.eslint) {
  handlers.push(
    'eslint --cache --cache-location node_modules/.cache/eslint/.eslintcache --fix',
  )
}

module.exports = {
  '*': ['prettier --write --ignore-unknown'],
  '*.{js,jsx,ts,tsx}': handlers,
}
