import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
`;
const StyledHeading = styled.h3`
  color: violet;
  font-size: 28px;
  font-weight: 600;
  margin: 0;
`;
const StyledQuestion = styled.div`
  margin: 20px 0;
`;
const Question = styled.p`
  margin: 0;
`;
const StyledInput = styled.input`
  border: none;
  box-shadow: 2px 1px 1px rgb(134, 134, 134);
  padding: 15px 10px;
  width: 90%;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;
`;
const StyledBtn = styled.button`
  background-color: rgb(134, 75, 134);
  padding: 15px 25px;
  color: $white;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px rgb(134, 134, 134);
  margin-top: 20px;
  cursor: pointer;
  width: 30%;
  align-self: center;
`;

export default class AddHabitForm extends Component {
  render() {
    return (
      <StyledForm>
        <StyledHeading>Add new habit</StyledHeading>
        <StyledQuestion>
          <Question>What habit do you work on?</Question>
          <StyledInput
            name="name"
            ref={this.nameRef}
            type="text"
            placeholder="Enter your new habit"
            required
          />
        </StyledQuestion>
        <StyledQuestion>
          <Question>How many days do want work on your new habit?</Question>
          <StyledInput
            name="duration"
            ref={this.durationRef}
            type="number"
            min="1"
            required
          />
        </StyledQuestion>
        <StyledBtn type="submit">Submit</StyledBtn>
      </StyledForm>
    );
  }
}
