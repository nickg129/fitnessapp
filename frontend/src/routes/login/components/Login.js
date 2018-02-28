import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';

import { HoldingGrid, ULink } from 'components/UIElements';


const LoginPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 600px;
  width: 400px;
  padding: 10px;
`;

const LoginGrid = styled(HoldingGrid)`
align-items: center;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch() {
    this.setState({ login: !this.state.login });
  }

  render() {
    const SignIn = (
      <LoginPaper>
      Login
        <TextField
          id="Email"
          label="Email"
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          margin="normal"
        />
        <Button raised color="primary"> <ULink to="/app"> LOGIN </ULink> </Button >
        <Button onClick={this.handleSwitch}>  Click here to sign up </Button >
      </LoginPaper>
    );
    const SignUp = (
      <LoginPaper>
      Login
        <TextField
          id="Email"
          label="Email"
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          margin="normal"
        />
        <TextField
          id="password"
          label="Confirm Password"
          type="password"
          margin="normal"
        />
        <Button raised color="primary"> <ULink to="/signup"> SIGNUP </ULink> </Button >
        <Button onClick={this.handleSwitch}>  Click here to Login</Button >
      </LoginPaper>
    );
    return (
      <LoginGrid container spacing={16}>
        {this.state.login ? SignIn : SignUp }
      </LoginGrid>
    );
  }
}

export default Login;
