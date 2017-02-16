const expect = require('chai').expect

const beautify = (value) => {
  return require('../')({
    clipboard: {
      readText: () => value,
    },
  })()
}

describe('Beautify', () => {
  it('beautifies', () => {
    beautify('if () { console.log("meow"); }').then((results) => {
      expect(results.indexOf('\n')).to.not.equal(-1)
    })
  })
})
