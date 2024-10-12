import pluginComments from './comments.js'
import pluginImport from './import.js'
import pluginJS from './js.js'
import pluginPromise from './promise.js'
import pluginRegexp from './regexp.js'
import pluginStylistic from './stylistic.js'
import pluginUnicorn from './unicorn.js'
import pluginYml from './yml.js'

export default [
  ...pluginJS,
  ...pluginStylistic,
  ...pluginUnicorn,
  ...pluginComments,
  ...pluginImport,
  ...pluginPromise,
  ...pluginRegexp,
  ...pluginYml,
]
