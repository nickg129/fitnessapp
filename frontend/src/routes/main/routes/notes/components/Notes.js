import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import { HoldingGrid } from 'components/UIElements';

const UserNotes = styled(Paper)`
height: 700px;
width: 100%;
padding: 10px;
`;

const Date = styled.div`
max-width: 300px;
align-self: flex-end;
margin-bottom: 50px;
`;


const NotesGrid = styled(HoldingGrid)`
flex-direction: column;
align-content: center;
padding 0 20% 0 20%;
`;

class Notes extends Component {
  render() {
    return (
      <NotesGrid>
        <Date>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Date>
        <UserNotes>
          My Notes
        </UserNotes>
      </NotesGrid>
    );
  }
}

export default Notes;
