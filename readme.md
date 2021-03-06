# remove-react-proptypes

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

Webpack 2:

```js
module.exports = {
  module: {
    rules: [
      // You may want to put this in a separate `modules` rule, so it's applied
      // to dependencies as well:
      {
        test: /\.js$/,
        use: 'remove-react-proptypes'
      },
      // And use other loaders as normal:
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  }
}
```

## License

[MIT](./LICENSE)
