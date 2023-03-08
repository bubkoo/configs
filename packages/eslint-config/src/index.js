const { hasAnyDeps } = require('@bubkoo/config-util')

const modules = ['./core.js']
const deps = hasAnyDeps(['react', 'typescript', 'jest', 'prettier'])
for (const key of Object.keys(deps)) {
  if (deps[key]) {
    modules.push(`./optional/${key}.js`)
  }
}

module.exports = {
  extends: modules,
}
