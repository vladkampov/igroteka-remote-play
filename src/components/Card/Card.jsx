import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import config from '../../config';

export default ({ type, name, avalaible, images, id }) => (
  <div className={`Card ${avalaible || 'innactive'}`}>
    <Link to={`/catalog/${type}/${id}`} className="Link">
      {images[0] && <Image src={`${config('CORE_API_DOMAIN')}${images[0].url}`} responsive />}
      <div className="info-bar">
        <div className="info">{name}</div>
        {type === 'consoles' && (
          <div className="buy">
            <Link to={`/pay/${id}`} className="btn btn-default">
              <FormattedMessage id="catalog.buyButton" />
            </Link>
          </div>
        )}
      </div>
    </Link>
  </div>
);
