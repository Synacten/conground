import React, { Component } from 'react';
import { Pagination } from 'antd';

export default class Free extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      minValue: 0,
      maxValue: 10,
    };
  }

  async componentDidMount() {
    const data = await fetch('https://pixabay.com/api/?key=12034307-639e3c4ebcc41ed722679ea1a&q');
    const { hits } = await data.json();
    this.setState({ hits });
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
    const { hits, minValue, maxValue } = this.state;
    return (
      <div className="pixabayWrap">
        <div className="pixabayPag">
          <Pagination
            defaultCurrent={1}
            total={hits.length}
            defaultPageSize={10}
            onChange={this.handleChange}
          />
        </div>
        <div className="pixabayApi">
          {hits
          && hits.length > 0
            ? hits.slice(minValue, maxValue).map(n => (
              <div className="pixabayEachCont" key={n.id}>
                <img src={n.webformatURL} alt={n.tags} />
                <div className="picInfo">
                  <p>
                    Views:
                    {' '}
                    {n.views}
                  </p>
                  <p>
                    Favorites:
                    {' '}
                    {n.favorites}
                  </p>
                  <p>
                    Downloads:
                    {' '}
                    {n.downloads}
                  </p>
                </div>
                <div className="avatar">
                  <img src={n.userImageURL} alt="" />
                  <h2>{n.user}</h2>
                </div>
              </div>
            )) : <div className="spinner" />}
        </div>
      </div>
    );
  }
}
