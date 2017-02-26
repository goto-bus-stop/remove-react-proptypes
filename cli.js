#!/usr/bin/env node
'use strict'

const removeReactPropTypes = require('./stream')

let source
if (process.argv[2]) {
  source = require('fs').createReadStream(process.argv[2])
} else {
  source = process.stdin
}

source
  .pipe(removeReactPropTypes())
  .pipe(process.stdout)
