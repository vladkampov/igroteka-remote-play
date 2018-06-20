import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import { WrapperDefaultLayout } from '../components';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import SignUp from "./SignUp";


const history = createHistory();

const Wrapped = {
  Home: WrapperDefaultLayout(Home),
  NotFound: WrapperDefaultLayout(NotFound),
  Login: WrapperDefaultLayout(Login),
  SignUp: WrapperDefaultLayout(SignUp),
};

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/not-found" component={Wrapped.NotFound} />
          <Route path="/login" component={Wrapped.Login} />
          <Route path="/signup" component={Wrapped.SignUp} />
          <Route path="/:listType?" exact component={Wrapped.Home} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
