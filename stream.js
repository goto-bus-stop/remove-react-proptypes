'use strict'

const removeReactPropTypes = require('./')
const through = require('through2')

module.exports = removeReactPropTypesStream

function removeReactPropTypesStream () {
  let data = ''

  function ondata (chunk, enc, cb) {
    data += chunk.toString()
    cb()
  }

  function onend (cb) {
    cb(null, removeReactPropTypes(data))
  }
  
  return through(ondata, onend)
}
