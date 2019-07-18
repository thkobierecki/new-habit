import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Header from './components/Header/Header';
import HabitList from './components/Dashboard/HabitList/HabitList';
import WelcomePage from './components/WelcomePage/WelcomePage';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/dashboard" component={HabitList} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
