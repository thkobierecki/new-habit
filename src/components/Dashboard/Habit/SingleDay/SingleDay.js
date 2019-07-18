import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDay = styled.div`
  height: 19px;
  width: 19px;
  border-radius: 100%;
  margin: 2px 5px 2px 0;
  border: 2px solid violet;
  background-color: ${props => props};
  cursor: pointer;
`;

export default class SingleDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marked: false,
    };

    this.toggleMarked = this.toggleMarked.bind(this);
  }

  toggleMarked() {
    this.props.toggleDayAsMarked(this.props.habitKey, this.props.dayNo);
  }

  render() {
    return (
      <>
        <StyledDay
          onClick={this.toggleMarked}
          fill={`${this.state.marked ? 'violet' : 'transparent'}`}
        />
      </>
    );
  }
}
