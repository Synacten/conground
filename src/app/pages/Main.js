import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import NavBar from '../components/NavBar';
import pic from '../../img/6land.jpg';


export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      content: [
        {
          key: 1,
          title: 'first slide',
          img: pic,
        },
        {
          key: 2,
          title: 'second slide',
          img: pic,
        },
        {
          key: 3,
          title: 'third slide',
          img: pic,
        },
        {
          key: 4,
          title: 'four slide',
          img: pic,
        },
      ],
    };
  }

  render() {
    const { content } = this.state;
    document.title = 'Main page';
    return (
      <div className="mainWrap">
        <NavBar />
        <div className="sliderWrap">
          <Slider cont={content} />
        </div>

        <Link to="/about">to About</Link>
      </div>
    );
  }
}
