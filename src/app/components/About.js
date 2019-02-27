import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default class About extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="about">
        about from
        <Link to="/">to home</Link>
      </div>
    );
  }
}
