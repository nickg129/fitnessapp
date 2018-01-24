import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Main from './routes/main';
import Login from './routes/login';
import Signup from './routes/signup';
import NoMatch from './components/NoMatch';
import Logout from './components/Logout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Redirect from="/" to="/login" exact />
          <Route path="/app" component={Main} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
