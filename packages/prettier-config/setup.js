const { initConfig } = require('@bubkoo/config-util')

const configFile = '.prettierrc'
const ignoreFile = '.prettierignore'
// @see https://prettier.io/docs/en/configuration.html#sharing-configurations
const configContent = `"@bubkoo/prettier-config"`
const ignoreContent = `
# Ignore specific file types
*.md
*.sh
*.yml
*.svg
*.gif
*.log
.DS_Store
CNAME
AUTHORS
LICENSE

# Ignore compiled files
node_modules/
es/
lib/
dist/
coverage/
*.min.js
*.min.css

# Ignore lock files
yarn.lock
package-lock.json

# Ignore logs
*.log
`.trim()

initConfig(ignoreFile, `${ignoreContent}\n`)
initConfig(
  configFile,
  `${configContent}\n`,
  [
    configFile,
    `${configFile}.js`,
    `${configFile}.cjs`,
    `${configFile}.json`,
    `${configFile}.json5`,
    `${configFile}.yaml`,
    `${configFile}.yml`,
    `${configFile}.toml`,
    'prettier.config.js',
    'prettier.config.cjs',
  ],
  'prettier',
)
