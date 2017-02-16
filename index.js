const beautify = require('js-beautify').js_beautify

module.exports = () => {
  return (value, env = {}) => {
    return Promise.resolve(beautify(value, { indent_size: 2 }))
  }
}
