import '@babel/polyfill';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import About from './components/About';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div className="test">
        <h1>test</h1>
        <About title="from about" />
      </div>
    );
  }
}


ReactDom.render(<App />, document.querySelector('.root'));
