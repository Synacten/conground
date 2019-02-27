import '@babel/polyfill';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Root from './components/Root';
import Page404 from './components/Page404';
import Slider from './components/Slider';

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
          <Switch>
            <Route path="/" exact component={Root} />
            <Route path="/about" component={About} />
            <Route component={Page404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


ReactDom.render(<App />, document.querySelector('.root'));
