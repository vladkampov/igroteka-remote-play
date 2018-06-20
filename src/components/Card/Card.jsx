import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import config from '../../config';

export default ({ type, name, avalaible, img, id }) => (
  <div className={`Card ${avalaible || 'innactive'}`}>
    <Link to={`/${type}/${id}`} className="Link">
      {img[0] && <Image src={`${config('CORE_API_DOMAIN')}${img[0].url}`} responsive />}
      <div className="info-bar">
        {name}
      </div>
    </Link>
  </div>
);
