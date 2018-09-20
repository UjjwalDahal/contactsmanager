import React, { Component } from 'react';

class Test extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillMount() {
    console.log('willMount');
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}

export default Test;