const fs = require('fs')
const path = require('path')
const readJson = require('./read-json')

module.exports = function (filename, content, filenames, pkgJsonKey) {
  const cwd = process.env.INIT_CWD

  filenames = filenames || []
  if (!filenames.includes(filename)) {
    filenames.push(filename)
  }


  for (let i = 0; i < filenames.length; i++) {
    const file = path.join(cwd, filenames[i])
    if (fs.existsSync(file)) {
      return
    }
  }

  if (pkgJsonKey) {
    const pkgJsonFile = path.join(cwd, 'package.json')
    const pkgJson = readJson(pkgJsonFile)
    if (pkgJson[pkgJsonKey]) {
      return
    }
  }

  const file = path.join(cwd, filename)
  fs.writeFileSync(file, content)
}
