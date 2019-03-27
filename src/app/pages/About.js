import React, { Component } from 'react';
import axios from 'axios'
import NavBar from '../components/NavBar';


export default class About extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const response = await axios.get('http://192.168.7.39:2800/profile');
    const json = await response.json();
    console.log(json);
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
