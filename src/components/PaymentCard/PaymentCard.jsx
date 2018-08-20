import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import './PaymentCard.scss';

@withRouter
class PaymentCard extends Component {
  handleClick = () => {
    const { id, consoleGroupId, history } = this.props;

    if (!consoleGroupId) {
      return history.push(`/catalog/consoles/${id}`);
    }

    return history.push(`/pay/status/${consoleGroupId}/${id}`);
  }

  render() {
    const { name, featured, description, price } = this.props;

    return (
      <div className={`PaymentCard ${featured && 'featured'}`}>
        <h4 className="name">{name}</h4>
        <p className="description">{description}</p>
        <div className="footer">
          <div className="price">{price}</div>
          <Button
            bsSize={featured ? 'large' : null}
            className="buy"
            onClick={this.handleClick}
          >
            <FormattedMessage id="pay.buyButton" />
          </Button>
        </div>
      </div>
    );
  }
}

export default PaymentCard;
