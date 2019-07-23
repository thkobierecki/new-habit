import React, { Component } from 'react';
import styled from 'styled-components';
import SignOut from '../SignOut/SignOut';

const StyledHeader = styled.header`
  position: absolute;
  display: grid;
  grid-template-columns: 10% 30% auto 20% 5%;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  background-color: white;
  color: darkgray;
`;
const StyledLogo = styled.div`
  grid-column: 2;
  font-size: 2.5rem;
  color: black;
  letter-spacing: 1.5px;
  font-family: 'Indie Flower', cursive;
`;

const StyledUserSection = styled.div`
  grid-column: 4;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const StyledLoggedBtn = styled.a`
  border: none;
  font-size: 20px;
  text-decoration: none;
  text-align: right;
  align-self: center;

  &:hover {
      cursor:pointer;
    font-weight: 600;
  }
`;

const StyledOngoingHabits = styled(StyledLoggedBtn)`
  margin-right: 25px;
  color: violet;
`;

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledLogo>New Habit</StyledLogo>
        <StyledUserSection>
          <StyledOngoingHabits>Ongoing Habits</StyledOngoingHabits>
          <SignOut />
        </StyledUserSection>
      </StyledHeader>
    );
  }
}
