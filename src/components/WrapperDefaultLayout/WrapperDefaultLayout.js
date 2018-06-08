import React from 'react';
import { Navbar, Footer } from '../';

export default (Wrapped) => ({ ...rest }) => (
  <div>
    <Wrapped {...rest} />
  </div>
);
