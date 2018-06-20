import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import { Loader } from '../';

export default Wrapped => (
  @inject('userStore')
    class Authenticated extends Component {
      render() {
        const { userStore, ...rest } = this.props;

        if (!userStore.user) {
          if (userStore.isLoading) {
            return <Loader />;
          }

          return <Redirect to="/login" />;
        }

        return <Wrapped {...rest} />;
      }
    }
);
