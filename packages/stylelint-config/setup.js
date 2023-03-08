const { initConfig } = require('@bubkoo/config-util')

const file = '.stylelintrc'
const content = `
{
  "extends": ["@bubkoo/stylelint-config"]
}
`.trim()

initConfig(
  file,
  `${content}\n`,
  [
    file,
    `${file}.js`,
    `${file}.cjs`,
    `${file}.json`,
    `${file}.yaml`,
    `${file}.yml`,
    `stylelint.config.js`,
    `stylelint.config.cjs`,
  ],
  `stylelint`,
)
