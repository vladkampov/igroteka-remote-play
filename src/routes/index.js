import React, { Fragment } from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import { WrapperDefaultLayout, PrivateRoute } from '../components';
import Home from './Home';
import Catalog from './Catalog';
import Login from './Login';
import NotFound from './NotFound';
import SignUp from './SignUp';
import Profile from './Profile';
import ChangePassword from './ChangePassword';
import NotAuthorized from './NotAuthorized';


const history = createHistory();

const Wrapped = {
  Home: WrapperDefaultLayout(Home),
  Catalog: WrapperDefaultLayout(Catalog),
  NotFound: WrapperDefaultLayout(NotFound),
  NotAuthorized: WrapperDefaultLayout(NotAuthorized),
  Login: WrapperDefaultLayout(Login),
  SignUp: WrapperDefaultLayout(SignUp),

  Profile: WrapperDefaultLayout(Profile),
  ChangePassword: WrapperDefaultLayout(ChangePassword),
};

export default () => (
  <Router history={history}>
    <Fragment>
      <Switch>
        <Route path="/" exact component={Wrapped.Home} />
        <Route path="/login" exact component={Wrapped.Login} />
        <Route path="/logout" exact component={Wrapped.Login} />
        <Route path="/signup" exact component={Wrapped.SignUp} />
        <Route path="/catalog/:listType?" exact component={Wrapped.Catalog} />
        <PrivateRoute path="/profile" exact component={Wrapped.Profile} />
        <PrivateRoute
          path="/profile/change-password/:privateCode"
          exact
          component={Wrapped.ChangePassword}
        />
        <Route path="/not-authorized" component={Wrapped.NotAuthorized} />
        <Route path="/*" component={Wrapped.NotFound} />
      </Switch>
    </Fragment>
  </Router>
);
