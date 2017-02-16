const expect = require('chai').expect
const hello = require('../')()

describe('Beautify', () => {
  it('beautifies', () => {
    hello('if () { console.log("meow"); }').then((results) => {
      expect(results.indexOf('\n')).to.not.equal(-1)
    })
  })
})
