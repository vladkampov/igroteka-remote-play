import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
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
          <Route path="/not-found" component={Wrapped.NotFound} />
          <Route path="/:listType?" exact component={Wrapped.Home} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
