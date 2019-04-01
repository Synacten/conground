import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../img/avatar.png';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      checkLogin: false,
    };
  }

  async componentDidMount() {
    try {
      const getProfile = await fetch('http://192.168.7.39:2800/profile', {
        method: 'GET',
        credentials: 'include',
      });
      const { candidate } = await getProfile.json();
      console.log(candidate);
      this.setState({ data: candidate, checkLogin: true });
    } catch (e) {
      console.log('promise failed...');
    }
  }

  logOut = async () => {
    const { data: { username } } = this.state;
    await fetch('http://192.168.7.39:2800/logout', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        username,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.setState({ checkLogin: false });
  }

  render() {
    const { data, checkLogin } = this.state;
    document.title = 'Profile';
    return (
      <div>
        {checkLogin ? (
          <div className="userProfile">
            <div className="avatar">
              <img src={avatar} alt="" />
            </div>
            <div className="userInfo">
              <h2>Username: <span>{data.username}</span></h2>
              <h2>Email: <span>{data.email}</span></h2>
              <h2>Personal id: <span>{data.id}</span></h2>
              <h2>Registration date: <span>{data.date}</span></h2>
              <div className="logOut" role="presentation" onClick={this.logOut}>
                <p>Logout</p>
              </div>
            </div>

          </div>
        ) : (
          <div className="userProfile">
            <div className="userInfo">
              <p>Please <Link to="/auth">login...</Link></p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
