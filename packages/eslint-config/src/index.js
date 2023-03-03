const { hasAnyDeps } = require('@bubkoo/config-util')

const modules = ['./common.js']
const deps = hasAnyDeps(['react', 'typescript', 'jest', 'prettier'])
Object.keys(deps).forEach((key) => {
  if (deps[key]) {
    modules.push(`./${key}.js`)
  }
})

module.exports = {
  extends: modules,
}
