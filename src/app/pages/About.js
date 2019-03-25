import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';


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
        <NavBar />
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
