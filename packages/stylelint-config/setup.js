#!/usr/bin/env node

const { mkfile } = require('@bubkoo/config-util')

const file = '.stylelintrc'
const content = `
{
  "extends": ["@bubkoo/stylelint-config"]
}
`.trim()

mkfile(file, `${content}\n`)
