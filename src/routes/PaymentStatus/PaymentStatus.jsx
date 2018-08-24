import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Loader } from '../../components';
import './PaymentStatus.scss';


@inject('payStore', 'userStore')
@observer
class PaymentStatus extends Component {
  componentDidMount() {
    const {
      match: { params: { consoleGroupId, paymentTypeId, redirect } },
      payStore: { pay, getPayStatus },
      userStore: { userId },
      history,
    } = this.props;

    if (redirect) {
      pay({ consoleGroup: consoleGroupId, paytyp: paymentTypeId, id: userId })
        .catch(() => history.push('/no-available'));
    }

    this.statusInterval = setInterval(getPayStatus, 5000);
    // eslint-disable-next-line no-console
    console.info(`Pay for console ${consoleGroupId} with paymentTypeId ${paymentTypeId}`);
  }

  componentWillUnmount() {
    clearInterval(this.statusInterval);
  }

  statusInterval = null;


  render() {
    const { payStore: { payStatus } } = this.props;

    return (
      <div className="PaymentStatus">
        <Grid>
          <h1 className={`title ${payStatus}`}>
            <FormattedMessage
              id="paymentStatus.title"
              values={{
                status: payStatus.toLowerCase(),
              }}
            />
          </h1>
          <p>
            {(payStatus === 'FAILED' || payStatus === 'PENDING' || payStatus === 'SUCCESS') && (
              <FormattedMessage id={`paymentStatus.body.${payStatus}`} />
            )}
            <br /><br />
            <Link to="/profile" className="btn btn-default btn-lg">
              <FormattedMessage id="paymentStatus.button.home" />
            </Link>&nbsp;
            <Link to="/profile" className="btn btn-default btn-lg">
              <FormattedMessage id="paymentStatus.button.profile" />
            </Link>&nbsp;
            {(payStatus === 'SUCCESS') && (
              <Link to="/profile" className="btn btn-success btn-lg">
                <FormattedMessage id="paymentStatus.button.download" />
              </Link>
            )}
          </p>
          {(payStatus === 'PROCESSING') && <Loader />}
        </Grid>
      </div>
    );
  }
}

export default PaymentStatus;
