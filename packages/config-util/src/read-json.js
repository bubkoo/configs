const fs = require('fs')

module.exports = function (file) {
  const raw = fs.readFileSync(file, { encoding: 'utf-8' })
  return JSON.parse(raw)
}
