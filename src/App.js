import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Header from './components/Header/Header';
import WelcomePage from './components/WelcomePage/WelcomePage';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import * as ROUTES from './const/routes';
import { withAuth } from './Session';
import Dashboard from './components/Dashboard/Dashboard';


const App = () => (
  <div className="app">


    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={WelcomePage} />
        <Route exact path={ROUTES.HOME} component={Dashboard} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
      </Switch>
    </BrowserRouter>

  </div>
);

export default withAuth(App);
