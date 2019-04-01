import React, { Component } from 'react';
import { Pagination } from 'antd';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      minValue: 0,
      maxValue: 10,
    };
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3700/php/api/post/read.php');
    const { data } = await response.json();
    this.setState({ data });
  }

  handleChange = (value) => {
    if (value <= 1) {
      this.setState({
        minValue: 0,
        maxValue: 10,
      });
    } else {
      this.setState({
        minValue: (value * 10) - 10,
        maxValue: value * 10,
      });
    }
  };


  render() {
    document.title = 'About';
    const { data, minValue, maxValue } = this.state;
    return (
      <div className="about">
        <div className="antPag">
          <Pagination
            defaultCurrent={1}
            total={data.length}
            defaultPageSize={10}
            onChange={this.handleChange}
          />
        </div>
        <div className="phpApi">
          {data
          && data.length > 0
          && data.slice(minValue, maxValue).map(n => (
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
