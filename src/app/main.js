import '@babel/polyfill';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Main from './pages/Main';
import Auth from './pages/Auth';
import Free from './pages/Free';
import Profile from './pages/Profile';
import Page404 from './pages/Page404';

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
          <NavBar />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/about" component={About} />
            <Route path="/auth" component={Auth} />
            <Route path="/pixabay" component={Free} />
            <Route path="/profile" component={Profile} />
            <Route component={Page404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


ReactDom.render(<App />, document.querySelector('.root'));
