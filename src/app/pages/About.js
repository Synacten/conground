import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class About extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.console.log(1);
  }


  render() {
    return (
      <div className="about">
        <p>about from</p>
        <Link to="/">to home</Link>
      </div>
    );
  }
}
