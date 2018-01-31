import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Route,
  Switch,
} from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TrendingUpIcon from 'material-ui-icons/TrendingUp';
import DirectionsRunIcon from 'material-ui-icons/DirectionsRun';
import DescriptionIcon from 'material-ui-icons/Description';
import FavoriteIcon from 'material-ui-icons/Favorite';
import Button from 'material-ui/Button';

import { ULink } from 'components/UIElements';
import Goals from '../routes/goals';
import Workouts from '../routes/workouts';
import Notes from '../routes/notes';
import HealthPicture from '../routes/healthpicture';


const drawerWidth = 240;

const Header = styled(AppBar)`
width: calc 100%-${drawerWidth}px;
padding-left: ${drawerWidth}px;
`;

const NavBar = styled(Toolbar)`
display: flex;
justify-content: space-between;
`;

const UserInfo = styled.div`
height: 300px;
width: ${drawerWidth}px;
display: felx;
flex direction: column;
align-items: center;
justify-content: center;
`;

const LinkList = styled.div`
  padding: 10px;
  max-width: ${drawerWidth}px;
`;

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header>
          <NavBar>
            <Typography type="title" color="inherit" noWrap>
              Fitness App
            </Typography>
            <Button color="inherit"><ULink to="/logout">Logout</ULink></Button>
          </NavBar>
        </Header>
        <Drawer
          type="permanent"
          anchor="left"
        >
          <div />
          <Divider />
          <UserInfo>User</UserInfo>
          <Divider />
          <LinkList>
            <List>
              <ULink to="/app/goals">
                <ListItem>
                  <ListItemIcon><TrendingUpIcon /></ListItemIcon>
                  Goals
                </ListItem>
              </ULink>
              <ULink to="/app/workouts">
                <ListItem>
                  <ListItemIcon><DirectionsRunIcon /></ListItemIcon>
                  Workouts
                </ListItem>
              </ULink>
              <ULink to="/app/notes">
                <ListItem>
                  <ListItemIcon><DescriptionIcon /></ListItemIcon>
                  Notes
                </ListItem>
              </ULink>
              <ULink to="/app/healthpicture">
                <ListItem>
                  <ListItemIcon><FavoriteIcon /></ListItemIcon>
                  Health Picture
                </ListItem>
              </ULink>
            </List>
          </LinkList>
        </Drawer>
        Main

        <Switch>
          <Route path="/app/goals" component={Goals} />
          <Route path="/app/workouts" component={Workouts} />
          <Route path="/app/notes" component={Notes} />
          <Route path="/app/healthpicture" component={HealthPicture} />
        </Switch>
      </div>
    );
  }
}

export default Main;
