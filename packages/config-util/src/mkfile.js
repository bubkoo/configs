const fs = require('fs')
const path = require('path')

const cwd = process.cwd()

module.exports = function (name, content, overwrite) {
  const file = path.join(cwd, name)
  if (!fs.existsSync(file) || overwrite) {
    fs.writeFileSync(file, content)
  }
}
