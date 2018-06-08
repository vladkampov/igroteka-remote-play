import React from 'react';

export default (Wrapped) => ({ ...rest }) => (
  <div>
    <Wrapped {...rest} />
  </div>
);
