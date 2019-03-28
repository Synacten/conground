import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      scrollView: document.body.scrollTop > 220
      || document.documentElement.scrollTop > 220 ? '40px' : '-40px',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  arrowUp = () => {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }


  handleScroll = () => {
    if (document.body.scrollTop > 220
      || document.documentElement.scrollTop > 220
    ) {
      this.setState({ scrollView: 'right: 40px' });
    } else {
      this.setState({ scrollView: 'right: -40px' });
    }
  }

  render() {
    const { scrollView } = this.state;
    return (
      <div className="navBar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/auth">Auth</Link></li>
        </ul>
        <div
          role="presentation"
          className="scrollUp"
          style={{
            right: document.body.scrollTop > 220
      || document.documentElement.scrollTop > 220 ? '40px' : '-40px',
          }}
          onClick={this.arrowUp}
        >
          <i className="fas fa-arrow-alt-circle-up" />
        </div>
      </div>
    );
  }
}
