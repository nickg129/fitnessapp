import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { Page } from 'components/UIElements';
import AppBar from './AppBar';
import NavDrawer from './NavDrawer';
import ContentFrame from './ContentFrame';
import Goals from '../routes/goals';
import Workouts from '../routes/workouts';
import Notes from '../routes/notes';
import HealthPicture from '../routes/healthpicture';

class Main extends Component {
  render() {
    return (
      <Page>
        <AppBar />
        <NavDrawer />
        <ContentFrame>
          <Switch>
            <Route path="/app/goals" component={Goals} />
            <Route path="/app/workouts" component={Workouts} />
            <Route path="/app/notes" component={Notes} />
            <Route path="/app/healthpicture" component={HealthPicture} />
          </Switch>
        </ContentFrame>
      </Page>
    );
  }
}

export default Main;
