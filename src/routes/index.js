import React, { Fragment } from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import { WrapperDefaultLayout, PrivateRoute } from '../components';
import Home from './Home';
import Catalog from './Catalog';
import ConsoleGroupDetails from './ConsoleGroupDetails';
import GameDetails from './GameDetails';
import Login from './Login';
import SignUp from './SignUp';
import PasswordRecovery from './PasswordRecovery';
import Pay from './Pay';
// errors
import NotFound from './NotFound';
import NotAuthorized from './NotAuthorized';
// authorized
import Profile from './Profile';
import ChangePassword from './ChangePassword';


const history = createHistory();

const Wrapped = {
  Home: WrapperDefaultLayout(Home),
  Catalog: WrapperDefaultLayout(Catalog),
  ConsoleGroupDetails: WrapperDefaultLayout(ConsoleGroupDetails),
  GameDetails: WrapperDefaultLayout(GameDetails),
  Login: WrapperDefaultLayout(Login),
  SignUp: WrapperDefaultLayout(SignUp),
  PasswordRecovery: WrapperDefaultLayout(PasswordRecovery),
  Pay: WrapperDefaultLayout(Pay),
  // errors
  NotFound: WrapperDefaultLayout(NotFound),
  NotAuthorized: WrapperDefaultLayout(NotAuthorized),
  // authorized
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
        <Route path="/recover-password" exact component={Wrapped.PasswordRecovery} />
        <Route path="/catalog/:listType?/:paymentTypeId?" exact component={Wrapped.Catalog} />
        <Route
          path="/consoles/:consoleGroupId/:paymentTypeId?"
          component={Wrapped.ConsoleGroupDetails}
          exact
        />
        <Route
          path="/games/:gameId/:paymentTypeId?"
          component={Wrapped.GameDetails}
          exact
        />
        <Route path="/pay/:consoleGroupId?" exact component={Wrapped.Pay} />

        {/* authorized */}
        <PrivateRoute path="/profile" exact component={Wrapped.Profile} />
        <PrivateRoute
          path="/profile/change-password/:privateCode"
          exact
          component={Wrapped.ChangePassword}
        />

        {/* errors */}
        <Route path="/not-authorized" component={Wrapped.NotAuthorized} />
        <Route path="/*" component={Wrapped.NotFound} />
      </Switch>
    </Fragment>
  </Router>
);
