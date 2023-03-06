const fs = require('fs')
const path = require('path')
const readJson = require('./read-json')

module.exports = function (filename, content, filenames, pkgJsonKey) {
  if (process.env.CI !== undefined) {
    console.log('CI environment, skipping.')
    process.exit(0)
  }

  const cwd = process.env.INIT_CWD

  // eslint-disable-next-line no-param-reassign
  filenames = filenames || []
  if (!filenames.includes(filename)) {
    filenames.push(filename)
  }

  for (let i = 0; i < filenames.length; i++) {
    const file = path.join(cwd, filenames[i])
    if (fs.existsSync(file)) {
      console.log(`Config file "${filenames[i]}" already exists, skipping.`)
      process.exit(0)
    }
  }

  if (pkgJsonKey) {
    const pkgJsonFile = path.join(cwd, 'package.json')
    const pkgJson = readJson(pkgJsonFile)
    if (pkgJson[pkgJsonKey]) {
      console.log(
        `Config with key "${pkgJsonKey}" already exists in package.json, skipping.`,
      )
      process.exit(0)
    }
  }

  const file = path.join(cwd, filename)
  fs.writeFileSync(file, content)
  console.log(`Config file "${filename}" created.`)
}
