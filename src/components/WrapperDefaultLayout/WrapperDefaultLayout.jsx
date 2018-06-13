import React, { Fragment } from 'react';
import { Header } from '../';

export default (Wrapped) => ({ ...rest }) => (
  <Fragment>
    <Header />
    <Wrapped {...rest} />
  </Fragment>
);
