import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Loader } from '../';

export default Wrapped => (
  @observer
  @inject('userStore')
    class Authenticated extends Component {
      render() {
        const { userStore, ...rest } = this.props;

        if (!userStore.user) {
          if (!userStore.isLoading) {
            // error
          }

          return <Loader />;
        }

        return <Wrapped {...rest} />;
      }
    }
);
