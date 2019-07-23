import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../const/routes';

const SignUpLink = () => (
  <p>
    Don't have an account?
    {' '}
    <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export { SignUpLink };
