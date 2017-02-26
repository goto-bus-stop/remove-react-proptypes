class X extends React.Component {
  render() {
    return h('h1', `Hello ${this.props.name}`)
  }
}

// Removes standalone statements entirely


let Y

(
  Y = ({ name }) => h('h1', `Hello ${name}`),
  // Replaces parts of statements with `void 0`
  void 0
)
