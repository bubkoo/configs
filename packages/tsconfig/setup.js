#!/usr/bin/env node

const { mkfile } = require('@bubkoo/config-util')

const file = 'tsconfig.json'
const content = `
{
  "extends": "@bubkoo/tsconfig",
}
`.trim()

mkfile(file, `${content}\n`)
