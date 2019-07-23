import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../../Firebase";
import * as ROUTES from "../../const/routes";
import styled from "styled-components";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled.input`
  font-size:16px;
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
  background-color:transparent;
  border:none;
  border-bottom: 1.5px solid black;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color:rgb(134, 75, 134);
  box-shadow: -5px 5px 20px -1px rgba(0, 0, 0, 0.2);
  padding: 0;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;

  &:hover{
    cursor:pointer;
    color:white;
  }
`
;

const StyledHeading = styled.h3`
  font-size: 2rem;
  margin-bottom: 30px;
  letter-spacing: 1.5px;
  font-family: "Indie Flower", cursive;
`;

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = e => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    e.preventDefault();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <StyledForm onSubmit={this.onSubmit}>
        <StyledHeading>Sign In</StyledHeading>
        <StyledInput
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <StyledInput
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <StyledButton disabled={isInvalid} type="submit">
          Sign In
        </StyledButton>

        {error && <p>{error.message}</p>}
      </StyledForm>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export { SignInForm };
