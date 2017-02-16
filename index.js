const beautify = require('js-beautify').js_beautify

module.exports = ({ clipboard }) => {
  return () => {
    const value = clipboard.readText()
    return Promise.resolve(beautify(value, { indent_size: 2 }))
  }
}
