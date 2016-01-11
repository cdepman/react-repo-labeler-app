var React = require('react');

var Hello = React.createClass({
  // render method returns the state
  render: function () {
    return <div>Hello, {this.props.name}!</div>
  }
});

React.render(<Hello name="Charlie"/>, document.body);
