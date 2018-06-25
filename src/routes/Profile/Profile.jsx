import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { Loader } from '../../components';
import config from '../../config';
import './Profile.scss';


@inject('userStore', 'paymentTypeStore', 'consoleGroupStore')
@observer
class Profile extends Component {
  componentDidMount() {
    const { userStore, paymentTypeStore, consoleGroupStore } = this.props;

    userStore.getUser()
      .then(() => {
        consoleGroupStore.getConsoleGroups();
        paymentTypeStore.getPaymentTypes();
      });
  }

  render() {
    const { userStore, paymentTypeStore, consoleGroupStore } = this.props;

    if (userStore.isLoading || paymentTypeStore.isLoading || consoleGroupStore.isLoading) {
      return <Loader />;
    }

    const { user: { username, email, image, payments } } = userStore;
    const { instances: paymentTypes } = paymentTypeStore;
    const { instances: consoleGroups } = consoleGroupStore;
    return (
      <div className="Profile">
        <Grid>
          <Row>
            <Col md={4}>
              <Image src={`${config('CORE_API_DOMAIN')}${image.url}`} thumbnail />
            </Col>
            <Col md={8}>
              <h2>{username}</h2>
              <p>
                <b><FormattedMessage id="profile.email" />: </b>
                {email}&nbsp;
                <Link to="/profile/change-email" ><FormattedMessage id="profile.changeEmail" /></Link>
              </p>
              <p>
                <b><FormattedMessage id="profile.password" />: </b>
                <Link to="/profile/change-password" ><FormattedMessage id="profile.changePassword" /></Link>
              </p>
              <Row>
                <Col md={6}>
                  <h4><FormattedMessage id="profile.paymentsHistory" />:</h4>
                  {payments.length ? (
                    <ul className="list-unstyled">
                      {payments.map(({ _id, status, updatedAt, consoleGroup, paymenttype }) => {
                        const paymentTypeObj = paymentTypes.find(({ id }) => id === paymenttype);
                        const consoleGroupObj = consoleGroups.find(({ id }) => id === consoleGroup);

                        return (
                          <li className={`payment ${status}`} key={_id}>
                            <div className="status">{status}</div>
                            {consoleGroupObj && (
                              <div className="consoleGroup">
                                <Link to={`/consoles/${consoleGroupObj.id}`}>{consoleGroupObj.name}</Link>
                              </div>
                            )}
                            {paymentTypeObj && (
                              <div className="paymentType">
                                {paymentTypeObj.name} – {paymentTypeObj.price}
                              </div>
                            )}
                            <div className="date">{moment(updatedAt).subtract(6, 'days').calendar()}</div>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <FormattedMessage id="profile.noPayments" />
                  )}
                </Col>
                <Col md={6}>
                  <h4><FormattedMessage id="profile.subscriptionHistory" />:</h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Profile;
