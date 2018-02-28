import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

import { HoldingGrid } from 'components/UIElements';

const CurrentGoal = styled(Paper)`
  width: 30%;
  height: 35%;
  padding: 10px;
  margin: 20px;
`;

const Progress = styled(Paper)`
width: 60%;
height: 35%;
padding: 10px;
margin: 20px;
`;

const PastGoals = styled(Paper)`
width: 80%;
height: 45%;
padding: 10px;
`;

class Goals extends Component {
  render() {
    return (
      <HoldingGrid spacing={24}>
        <CurrentGoal>
          CurrentGoal
        </CurrentGoal>
        <Progress>
          Progress
        </Progress>
        <PastGoals>
          Past Goals
        </PastGoals>
      </HoldingGrid>
    );
  }
}

export default Goals;
