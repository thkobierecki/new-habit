import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div``;
const StyledSection = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 5% auto 5%;
  padding-top: 80px;
  padding-bottom: 80px;

  @media (max-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
const StyledRow = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-columns: 45% 10% 45%;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const StyledDetails = styled.div`
  align-self: start;
  grid-column: 1;
`;
const StyledImgSection = styled.div`
  grid-column: 3;
`;
const StyledHeading = styled.h1`
  font-size: 56px;
  font-weight: 400;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 20px;
  }
`;
const StyledParagraph = styled.p`
  margin: 30px 0;
  font-size: 20px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const StyledImg = styled.img`
  width: 100%;
`;


export default class WelcomePage extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledSection>
          <StyledRow>
            <StyledDetails>
              <StyledHeading>Build Habits That Stick</StyledHeading>
              <StyledParagraph>
                Journaling daily is a powerful tool which helps you evaluate
                your experiences and increase self-awareness. New Habit is
                based on the idea of Bullet Journal by Ridel Carroll. It is
                descripted as a mindfullness practice disguised as productivity
                system.
              </StyledParagraph>
            </StyledDetails>
            <StyledImgSection>
              <StyledImg src="" />
            </StyledImgSection>
          </StyledRow>
        </StyledSection>
      </StyledContainer>
    );
  }
}
