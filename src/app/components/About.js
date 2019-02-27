import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class About extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { title } = this.props;
    return (
      <div>
        {title}
      </div>
    );
  }
}

About.propTypes = {
  title: PropTypes.string.isRequired,
};
