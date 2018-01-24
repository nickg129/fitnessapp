import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        Login
        <Link to="/app"> LOGIN </Link>
        <Link to="signup"> SIGNUP </Link>
      </div>
    );
  }
}

export default Login;