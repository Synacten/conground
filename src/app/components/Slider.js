import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';


class Slider extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const options = {
      showArrows: true,
      showStatus: false,
      showThumbs: false,
      autoPlay: true,
      interval: 993000,
      emulateTouch: true,
      infiniteLoop: true,
    };
    const { cont } = this.props;
    return (
      <Carousel {...options}>
        {cont.map(n => <div key={n.key}><img src={n.img} alt={n.title} /></div>)}
      </Carousel>
    );
  }
}

Slider.propTypes = {
  cont: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};


export default Slider;
