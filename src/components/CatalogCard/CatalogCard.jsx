import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import config from '../../config';


@withRouter
class CatalogCard extends Component {
  handleClick = () => {
    const { id, paymentTypeId, history } = this.props;

    if (!paymentTypeId) {
      return history.push(`/pay/${id}`);
    }

    // eslint-disable-next-line no-console
    console.log(`Pay for console ${id} with paymentTypeId ${paymentTypeId}`);
    return null;
  }

  render() {
    const { type, name, avalaible, images, id, paymentTypeId } = this.props;

    return (
      <div className={`Card ${avalaible || 'innactive'}`}>
        <Link to={`/${type}/${id}/${paymentTypeId || null}`} className="Link">
          {images[0] && <Image src={`${config('CORE_API_DOMAIN')}${images[0].url}`} responsive />}
          <div className="info-bar">
            <div className="info">{name}</div>
          </div>
        </Link>
        {type === 'consoles' && (
          <div className="buy">
            <Button onClick={this.handleClick}>
              <FormattedMessage id="catalog.buyButton" />
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default CatalogCard;
