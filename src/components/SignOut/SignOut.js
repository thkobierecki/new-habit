import React from 'react';
import styled from 'styled-components';
import { withFirebase } from '../../Firebase';

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

const SignOut = ({ firebase }) => (
  <StyledLoggedBtn type="button" onClick={firebase.doSignOut}>
    SignOut
  </StyledLoggedBtn>
);

export default withFirebase(SignOut);
