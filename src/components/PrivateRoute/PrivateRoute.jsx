import React from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, userStore, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      userStore.user
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  />
);

export default inject('userStore')(observer(PrivateRoute));
