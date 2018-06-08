import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { WrapperDefaultLayout } from '../components';
import Home from './Home';
import NotFound from './NotFound';


const history = createHistory();

const Wrapped = {
  Home: WrapperDefaultLayout(Home),
  NotFound: WrapperDefaultLayout(NotFound),
};

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Wrapped.Home} />
          <Route path="/*" component={Wrapped.NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
