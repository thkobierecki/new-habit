import React from 'react';
import styled from 'styled-components';
import { SignInForm } from './SignInForm';
import { SignUpLink } from './SignUpLink';

const StyledWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const StyledHeading = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 30px;
  letter-spacing: 1.5px;
  font-family: "Indie Flower", cursive;
`;
const StyledFormCard = styled.div`
  width: 400px;
  height: 400px;
  background-color: violet;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignIn = () => (
  <StyledWrapper>
    <StyledHeading>New Habit</StyledHeading>
    <StyledFormCard>
      <SignInForm />
      <SignUpLink />
    </StyledFormCard>
  </StyledWrapper>
);

export default SignIn;
