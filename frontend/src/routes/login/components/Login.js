import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';

import { HoldingGrid, ULink } from 'components/UIElements';


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

class Login extends Component {
  render() {
    return (
      <HoldingGrid container spacing={16} className="Login">
        <LoginPaper>
          Login
          <div >
            <TextField
              id="Email"
              label="Email"
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="password"
              label="Password"
              type="password"
              margin="normal"
            />
          </div>
          <div>
            <Button raised color="primary"> <ULink to="/app"> LOGIN </ULink> </Button >
            <Button raised color="secondary"> <ULink to="signup"> SIGNUP </ULink> </Button >
          </div>
        </LoginPaper>
      </HoldingGrid>
    );
  }
}

export default Login;
