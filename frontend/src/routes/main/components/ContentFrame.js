import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Temp = styled.main`
width: 100%;
height: calc(100% - 115px);
margin-top: 65px;
margin-left: 240px;
padding: 25px;
`;

class ContentFrame extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  render() {
    const { children } = this.props;
    return (
      <Temp>
        {children}
      </Temp>
    );
  }
}

export default ContentFrame;
