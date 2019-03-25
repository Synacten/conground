import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="navBar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/auth">Auth</Link></li>
        </ul>
      </div>
    );
  }
}
