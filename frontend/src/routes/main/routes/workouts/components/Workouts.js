import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

import { HoldingGrid } from 'components/UIElements';

const Workout = styled(Paper)`
 height: 500px;
 width: 500px;
 padding: 15px;
`;

const WorkoutGrid = styled(HoldingGrid)`
justify-content: space-around;
`;

class Workouts extends Component {
  render() {
    return (
      <WorkoutGrid>
        <Workout >
          Title
        </Workout >
        <Workout >
          Title
        </Workout >
        <Workout >
          Title
        </Workout >
        <Workout >
          Title
        </Workout >
        <Workout >
          Title
        </Workout >
        <Workout >
          Title
        </Workout >

      </WorkoutGrid>
    );
  }
}

export default Workouts;
