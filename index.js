'use strict'

const falafel = require('falafel')
const babylon = require('babylon')

module.exports = removeReactPropTypes

const isPropTypesExpression = (node) =>
  node.type === 'MemberExpression' && node.property.type === 'Identifier' &&
  node.property.name === 'propTypes'

function removeReactPropTypes (src) {
  return falafel(src, {
    parser: babylon,
    allowImportExportEverywhere: true,
    allowReturnOutsideFunction: true,
    allowSuperOutsideMethod: true,
    sourceType: 'module',
    plugins: [ '*', 'jsx', 'flow' ]
  }, (node) => {
    if (node.type === 'AssignmentExpression' && isPropTypesExpression(node.left)) {
      // Remove entirely if it's a separate statement
      if (node.parent.type === 'ExpressionStatement') {
        node.parent.update('')
      } else {
        // Else replace it with undefined
        node.update(`void 0`)
      }
    }
  }).toString()
}
