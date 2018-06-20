import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import { WrapperDefaultLayout } from '../components';
import Home from './Home';
import Catalog from './Catalog';
import Login from './Login';
import NotFound from './NotFound';
import SignUp from "./SignUp";


const history = createHistory();

const Wrapped = {
  Home: WrapperDefaultLayout(Home),
  Catalog: WrapperDefaultLayout(Catalog),
  NotFound: WrapperDefaultLayout(NotFound),
  Login: WrapperDefaultLayout(Login),
  SignUp: WrapperDefaultLayout(SignUp),
};

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Wrapped.Home} />
          <Route path="/login" exact component={Wrapped.Login} />
          <Route path="/signup" exact component={Wrapped.SignUp} />
          <Route path="/catalog/:listType?" exact component={Wrapped.Catalog} />
          <Route path="/*" component={Wrapped.NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
