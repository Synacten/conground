import '@babel/polyfill';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>react</div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.root'));
