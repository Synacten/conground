import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
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
        <div className="par">
          <Parallax
            blur={0}
            bgImage={pic}
            bgImageAlt="the cat"
            strength={1000}
          >
            <div className="text">12</div>
            <div style={{ height: '200px' }} />
          </Parallax>
        </div>
      </div>
    );
  }
}
