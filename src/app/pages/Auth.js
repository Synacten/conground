import React, { Component } from 'react';
import PropTypes from 'prop-types'
import NavBar from '../components/NavBar';

export default class Auth extends Component {
    static defaultProps = {
        username: '',
        email: '',
        password: '',
    }
  constructor() {
    super();
    this.state = {
      username: 'john2',
      email: 'john2@gmail.com',
      password: '123456',
      errors: []
    };
  }

  authForm = async (e) =>  {
    e.preventDefault();
    const { username, email, password } = this.state
    const SendAuthData = await fetch('http://192.168.7.39:2800/login', {
        method: 'POST',
        mode: "cors",
        credentials: 'include',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        
        headers: {
            'Content-Type': 'application/json',
        },
      });
      console.log(SendAuthData);
  }

  checkUsername = (e) => {
      console.log(e.target.value)
      this.setState({ username: e.target.value})
  }

  checkEmail = (e) => {
    console.log(e.target.value)
    this.setState({ email: e.target.value})
}

checkPassword = (e) => {
    console.log(e.target.value)
    this.setState({ password: e.target.value})
}

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="auth">
        <NavBar />
        <div className="formBlock">
          <div className="signIn">
            <form onSubmit={this.authForm} noValidate>
              <p>Authenticate</p>
              <label htmlFor="username">
              username
                <input type="text" name="username" defaultValue={username} onChange={this.checkUsername} />
              </label>
              <label htmlFor="email">
              email
                <input type="email" name="email" defaultValue={email} onChange={this.checkEmail}/>
              </label>
              <label htmlFor="password">
              password
                <input type="password" name="password" defaultValue={password} onChange={this.checkPassword}/>
              </label>
              <label htmlFor="submit">
                <input type="submit" name="submit" />
              </label>
            </form>
          </div>
          <div className="regist">2</div>
        </div>
      </div>
    );
  }
}
