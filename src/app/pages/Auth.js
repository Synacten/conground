import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Auth extends Component {
    static defaultProps = {
      username: '',
      email: '',
      password: '',
    }

    constructor() {
      super();
      this.state = {
        username: '',
        email: '',
        password: '',
        redirect: false,
      };
    }

  authForm = async (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const data = await fetch('http://192.168.7.39:2800/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (data.status === 200) {
      this.setState({ redirect: true });
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to="/profile" />;
      }
    }
    return 0;
  }

  checkUsername = (e) => {
    this.setState({ username: e.target.value });
  }

  checkEmail = (e) => {
    this.setState({ email: e.target.value });
  }

checkPassword = (e) => {
  this.setState({ password: e.target.value });
}

render() {
  const { username, email, password } = this.state;
  document.title = 'Auth';
  return (
    <div className="auth">
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
              <input type="email" name="email" defaultValue={email} onChange={this.checkEmail} />
            </label>
            <label htmlFor="password">
              password
              <input type="password" name="password" defaultValue={password} onChange={this.checkPassword} />
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
