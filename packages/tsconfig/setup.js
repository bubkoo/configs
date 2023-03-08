const { initConfig } = require('@bubkoo/config-util')

const file = 'tsconfig.json'
const content = `
{
  "extends": "@bubkoo/tsconfig",
}
`.trim()

initConfig(file, `${content}\n`)
