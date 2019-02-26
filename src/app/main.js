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
      <div className="test">
        <h1>react</h1>
      </div>
    );
  }
}


ReactDom.render(<App />, document.querySelector('.root'));
