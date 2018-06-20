import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import { WrapperDefaultLayout, WrapperAuthCheck } from '../components';
import Home from './Home';
import Catalog from './Catalog';
import Login from './Login';
import NotFound from './NotFound';
import SignUp from './SignUp';
import Profile from './Profile';


const history = createHistory();

const Auth = {
  Profile: WrapperAuthCheck(Profile),
};

const Wrapped = {
  Home: WrapperDefaultLayout(Home),
  Catalog: WrapperDefaultLayout(Catalog),
  NotFound: WrapperDefaultLayout(NotFound),
  Login: WrapperDefaultLayout(Login),
  SignUp: WrapperDefaultLayout(SignUp),

  Profile: WrapperDefaultLayout(Auth.Profile),
};

export default () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Wrapped.Home} />
      <Route path="/profile" exact component={Wrapped.Profile} />
      <Route path="/login" exact component={Wrapped.Login} />
      <Route path="/signup" exact component={Wrapped.SignUp} />
      <Route path="/catalog/:listType?" exact component={Wrapped.Catalog} />
      <Route path="/*" component={Wrapped.NotFound} />
    </Switch>
  </Router>
);
