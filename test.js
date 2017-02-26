const assert = require('assert')
const fs = require('fs')
const removeReactPropTypes = require('./')

const input = fs.readFileSync('test/input.js', 'utf8')
const expected = fs.readFileSync('test/expected.js', 'utf8')

const actual = removeReactPropTypes(input)
fs.writeFileSync('test/actual.js', actual)

assert.strictEqual(
  actual,
  expected,
  'Incorrect output. Compare test/expected.js and test/actual.js for details.'
)

console.log('ok')
