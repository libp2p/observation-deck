const path = require('path')

module.exports = {
  process(src, filename, config, options) {
    return `
      module.exports = '${path.relative(__filename, filename)}'
    `
  },
}
