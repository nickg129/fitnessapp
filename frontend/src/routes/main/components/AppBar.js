import React, { Component } from 'react';
import styled from 'styled-components';
import { ULink } from 'components/UIElements';


import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import Button from 'material-ui/Button';

const drawerWidth = 240;

const Header = styled(AppBar)`
postion: absolute;
width: calc 100%-${drawerWidth}px;
padding-left: ${drawerWidth}px;
`;

const NavBar = styled(Toolbar)`
display: flex;
justify-content: space-between;
`;

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <NavBar>
          <Typography type="title" color="inherit" noWrap>
            Fitness App
          </Typography>
          <Button color="inherit"><ULink to="/logout">Logout</ULink></Button>
        </NavBar>
      </Header>
    );
  }
}

export default AppHeader;
