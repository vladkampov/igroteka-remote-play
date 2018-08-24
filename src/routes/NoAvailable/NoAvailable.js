import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="container NotFound">
    <h1>Uh Oh! There is no console available at the moment</h1>
    <p>Try again in a bit</p>
    <Link to="/" className="btn btn-default">Go to Homepage</Link>
  </div>
);
