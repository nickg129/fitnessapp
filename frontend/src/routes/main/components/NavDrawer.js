import React, { Component } from 'react';
import styled from 'styled-components';

import Drawer from 'material-ui/Drawer';

import List, { ListItem, ListItemIcon } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TrendingUpIcon from 'material-ui-icons/TrendingUp';
import DirectionsRunIcon from 'material-ui-icons/DirectionsRun';
import DescriptionIcon from 'material-ui-icons/Description';
import FavoriteIcon from 'material-ui-icons/Favorite';

import { ULink } from 'components/UIElements';

const drawerWidth = 240;

const UserInfo = styled.div`
height: 300px;
width: ${drawerWidth}px;
display: flex;
flex direction: column;
align-items: center;
justify-content: center;
`;

const LinkList = styled.div`
  padding: 10px;
  max-width: ${drawerWidth}px;
`;

class NavDrawer extends Component {
  render() {
    return (
      <Drawer
        type="permanent"
        anchor="left"
      >
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
    );
  }
}

export default NavDrawer;
