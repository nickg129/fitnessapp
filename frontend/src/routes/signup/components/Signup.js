import React, { Component } from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

import { HoldingGrid } from 'components/UIElements';
import BodyType from './BodyType';
import Diet from './Diet';
import GoalPicker from './GoalPicker';
import Vitals from './Vitals';

const Header = styled(AppBar)`
position: absolute;
height: 64px;
`;

const Content = styled(Paper)`
height: 80%;
width: 80%;
`;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
    this.renderStepper = this.renderStepper.bind(this);
  }

  renderStepper() {
    const steps = ['Vitals', 'Body Type', 'Diet', 'Goal Picker'];
    let nextStep;
    let previousStep;

    if (this.state.step > 0) {
      previousStep = steps[this.state.step - 1];
    }
    if (this.state.step < 3) {
      nextStep = steps[this.state.step + 1];
    }
    return (
      <div>
        {previousStep}{nextStep}
      </div>
    );
  }

  renderStep() {
    switch (this.state.step) {
      case 1:
        return BodyType;
      case 2:
        return Diet;
      case 3:
        return GoalPicker;
      default:
        return Vitals;
    }
  }
  render() {
    return (
      <HoldingGrid>
        <Header position="static" color="default">
          <Toolbar>
            <Typography type="title" color="white">
              Welcome
            </Typography>
          </Toolbar>
        </Header>
        <Content>
          Signup Goodies
        </Content>
      </HoldingGrid>
    );
  }
}

export default Signup;
