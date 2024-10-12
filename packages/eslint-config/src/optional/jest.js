import pluginJest from 'eslint-plugin-jest'
const name = 'eslint-plugin-jest/recommended'
const config = pluginJest.configs['flat/recommended']

export default [
  {
    ...config,
    name,
  },
  {
    name: `${name}/override`,
    rules: {},
  },
]
