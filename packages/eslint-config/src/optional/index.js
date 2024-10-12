import { hasAnyDeps } from '@bubkoo/config-util'
import pluginJest from './jest.js'
import pluginPrettier from './prettier.js'
import pluginReact from './react.js'
import pluginTS from './typescript.js'

const optionalPlugins = {
  prettier: pluginPrettier,
  jest: pluginJest,
  react: pluginReact,
  typescript: pluginTS,
}

const deps = hasAnyDeps(Object.keys(optionalPlugins))
const optional = []
for (var key in deps) {
  if (deps[key]) {
    optional.push(...optionalPlugins[key])
  }
}

export default optional
