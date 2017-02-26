# remove-react-proptypes

[![Greenkeeper badge](https://badges.greenkeeper.io/goto-bus-stop/remove-react-proptypes.svg)](https://greenkeeper.io/)

Remove React PropTypes. Removes all occurrences of `<component>.propTypes = <types>`.

## Installation

```bash
npm install --save-dev remove-react-proptypes
```

Or install the CLI globally:

```bash
npm install --global remove-react-proptypes
```

## Usage

CLI:

```bash
remove-react-proptypes input.js > output.js
# or pipe to stdin:
cat input.js | remove-react-proptypes | uglifyjs -o output.js
```

Node:

```js
const removeReactPropTypes = require('remove-react-proptypes')
const outputString = removeReactPropTypes(inputString)
```

Node.js streams:

```js
const removeReactPropTypes = require('remove-react-proptypes/stream')
fs.createReadStream('input.js')
  .pipe(removeReactPropTypes())
  .pipe(fs.writeReadStream('output.js'))
```

Browserify:

```js
browserify -g remove-react-proptypes/stream -e input.js > output.js
```

## License

[MIT](./LICENSE)
