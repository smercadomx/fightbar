import React, { Component } from 'react';

class Fight extends Component {
  render() {
    return <div>Fight {this.props.match.params.id}</div>;
  }
}

export default Fight;
