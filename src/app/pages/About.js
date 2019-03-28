import React, { Component } from 'react';
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
    const response = await fetch('http://localhost:3700/php/api/post/read.php');
    const { data } = await response.json();
    this.setState({ data });
  }

  handleScroll() {
    this.console.log(2);
  }


  render() {
    document.title = 'About';
    const { data } = this.state;
    return (
      <div className="about">
        <NavBar />
        <div className="phpApi">
          {data.map(n => (
            <div className="eachCont" key={n.id}>
              <h2>{n.title}</h2>
              <img src={n.img} alt={n.title} />
              <span>{n.director}</span>
              <h6>
                {'Очки:'}
                {n.count}
              </h6>
            </div>

          ))}
        </div>
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
