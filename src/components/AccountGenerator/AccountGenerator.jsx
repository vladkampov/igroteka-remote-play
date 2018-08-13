import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Alert } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import FormAccountGenerator from './FormAccountGenerator';
import './AccountGenerator.scss';

@inject('userStore')
@observer
class AccountGenerator extends Component {
  handleSubmit = ({ email }) => {
    const { userStore: { createGeneratedUser } } = this.props;

    return createGeneratedUser({ email })
      .catch(({ data: { message: error } }) => Promise.reject(error));
  }

  render() {
    return (
      <div className="AccountGenerator">
        <Alert bsStyle="warning">
          <h4><FormattedMessage id="accountGenerator.title" /></h4>
          <p><FormattedMessage id="accountGenerator.body" /></p>
          <FormAccountGenerator onSubmit={this.handleSubmit} />
          <p><Link to="/login"><FormattedMessage id="accountGenerator.login" /></Link></p>
        </Alert>
      </div>
    );
  }
}

export default AccountGenerator;
