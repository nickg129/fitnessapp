import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        Signup
        <Link to="/login"> LOGIN </Link>
      </div>
    );
  }
}

export default Signup;
