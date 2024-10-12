import * as jsEnv from 'browser-or-node'
import globalObj from 'globals'

const globals = {}

if (jsEnv.isBrowser) {
  Object.assign(globals, globalObj.browser)
}

if (jsEnv.isNode) {
  Object.assign(globals, globalObj.node)
}

export default globals
