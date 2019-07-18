import React, { Component } from 'react';
import styled from 'styled-components';
import SingleDay from './SingleDay/SingleDay';

const StyledContainer = styled.div`
  margin-bottom: 20px;
  background-color: none;
  box-shadow: 1px 2px 5px rgb(134, 134, 134);
  border-radius: 10px;
`;

const StyledHeader = styled.div`
  padding: 15px 20px;
  background-color: rgb(134, 75, 134);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-radius: 10px 10px 0 0;
`;

const StyledHeading = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

const StyledButton = styled.button`
  border: none;
  color: white;
  background: none;
  font-size: 13px;
  cursor: pointer;
  padding-right: 0;

  &:hover {
    font-weight: 600;
  }
`;

const StyledProgressArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 10px 10px;
  background-color: white;
  padding: 15px 20px;
  flex-wrap: wrap;
`;

const StyledDaysArea = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const StyledProgress = styled.div`
  font-weight: 600;
  letter-spacing: 1px;
`;

const StyledProgresDay = styled.span`
  color: violet;
`;

const StyledDays = styled.div`
  letter-spacing: 0;
  font-weight: 200;
  color: rgb(173, 173, 212);
  font-size: 13px;
  text-align: center;
`;
export default class Habit extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete() {
    this.props.deleteHabit(this.props.index);
  }

  render() {
    return (
      <StyledContainer>
        <StyledHeader>
          <StyledHeading>Name</StyledHeading>
          <StyledButton>delete</StyledButton>
        </StyledHeader>
        <StyledProgressArea>
          <StyledDaysArea />
          <StyledProgress>
            <div>
              <StyledProgresDay>3</StyledProgresDay>
              <span>/10</span>
            </div>
            <StyledDays>days</StyledDays>
          </StyledProgress>
        </StyledProgressArea>
      </StyledContainer>
    );
  }
}
