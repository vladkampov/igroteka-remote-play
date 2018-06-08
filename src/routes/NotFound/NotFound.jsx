import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="container">
    <h1>404 - Not Found</h1>
    <p>We are sorry, but the page you requested is not available.</p>
    <Link to="/" className="btn btn-success">Go to Homepage</Link>
  </div>
);
