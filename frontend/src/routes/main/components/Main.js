import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import Goals from '../routes/goals';
import Workouts from '../routes/workouts';
import Notes from '../routes/notes';
import HealthPicture from '../routes/healthpicture';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        Main
        <Link to="/logout">Logout</Link>
        <Link to="/app/goals">goals</Link>
        <Link to="/app/workouts">workouts</Link>
        <Link to="/app/notes">notes</Link>
        <Link to="/app/healthpicture">HP</Link>
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
