import '@babel/polyfill';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Root from './components/Root';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exec path="/" component={Root} />
          <Route exec path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}


ReactDom.render(<App />, document.querySelector('.root'));
