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
    this.console.log(2);
  }


  render() {
    document.title = 'About';
    return (
      <div className="about">
        <p>about from</p>
        <Link to="/">to home</Link>
      </div>
    );
  }
}

const a = () => {
  if (a < 0) {
    return a;
  }
  return a + 1;
};

a(2);
