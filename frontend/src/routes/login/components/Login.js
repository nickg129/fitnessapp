import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';

const LoginPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px;
  width: 400px;
  padding: 10px;
  text-align: center;
`;

const HoldingGrid = styled(Grid)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Login extends Component {
  render() {
    return (
      <HoldingGrid container spacing={12} className="Login">
        <LoginPaper item>
          Login
          <div item >
            <TextField
              id="Email"
              label="Email"
              margin="normal"
            />
          </div>
          <div item>
            <TextField
              id="password"
              label="Password"
              type="password"
              margin="normal"
            />
          </div>
          <div>
            <Button raised color="primary"> <Link to="/app"> LOGIN </Link> </Button >
            <Button raised color="secondary"> <Link to="signup"> SIGNUP </Link> </Button >
          </div>
        </LoginPaper>
      </HoldingGrid>
    );
  }
}

export default Login;
