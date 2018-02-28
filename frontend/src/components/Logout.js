import React, { Component } from 'react';
import { ULink } from 'components/UIElements';

class Logout extends Component {
  render() {
    return (
      <div className="Logout">
        You have beem logged out
        <ULink to="/login">Log Back In </ULink>
      </div>
    );
  }
}

export default Logout;
