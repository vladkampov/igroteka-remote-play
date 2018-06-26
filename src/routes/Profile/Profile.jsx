import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { Loader } from '../../components';
import config from '../../config';
import avatarPlaceholder from './avatarPlaceholder.png';
import './Profile.scss';


@inject('userStore', 'paymentTypeStore', 'consoleGroupStore')
@observer
class Profile extends Component {
  componentDidMount() {
    const { paymentTypeStore, consoleGroupStore } = this.props;

    consoleGroupStore.getConsoleGroups();
    paymentTypeStore.getPaymentTypes();
  }

  render() {
    const { userStore, paymentTypeStore, consoleGroupStore, match: { params: { paymentId } } } = this.props;

    if (userStore.isLoading || paymentTypeStore.isLoading || consoleGroupStore.isLoading) {
      return <Loader />;
    }

    const { user: { username, email, image, payments = [], subscriptions = [] } } = userStore;
    const { instances: paymentTypes } = paymentTypeStore;
    const { instances: consoleGroups } = consoleGroupStore;
    return (
      <div className="Profile">
        <Grid>
          <Row>
            <Col md={4}>
              <Image
                src={image
                  ? `${config('CORE_API_DOMAIN')}${image.url}`
                  : avatarPlaceholder}
                thumbnail
              />
            </Col>
            <Col md={8}>
              <h2>{username}</h2>
              <p>
                <Link to="/profile/edit" className="btn btn-default">
                  <FormattedMessage id="profile.edit" />
                </Link>
              </p>
              <p>
                <b><FormattedMessage id="profile.email" />: </b>
                {email}
              </p>
              <Row>
                <Col md={6}>
                  <h4><FormattedMessage id="profile.paymentsHistory" />:</h4>
                  {payments.length ? (
                    <ul className="list-unstyled">
                      {payments.map(({ _id, status, updatedAt, consoleGroup, paymentType }) => {
                        const paymentTypeObj = paymentTypes.find(({ id }) => id === paymentType);
                        const consoleGroupObj = consoleGroups.find(({ id }) => id === consoleGroup);

                        return (
                          <li
                            className={`payment ${status} ${paymentId === _id && 'activePayment'}`}
                            key={_id}
                          >
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
                            <div className="date">{moment(updatedAt).calendar()}</div>
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
                  {subscriptions.length ? (
                    <ul className="list-unstyled">
                      {subscriptions.map(({ _id, active, start_date, end_date, consoleGroup, payment }) => {
                        // const paymentTypeObj = paymentTypes.find(({ id }) => id === paymentType);
                        const consoleGroupObj = consoleGroups.find(({ id }) => id === consoleGroup);

                        return (
                          <li className={`subscription ${active && 'active'}`} key={_id}>
                            {consoleGroupObj && (
                              <div className="consoleGroup">
                                <Link to={`/consoles/${consoleGroupObj.id}`}>{consoleGroupObj.name}</Link>
                              </div>
                            )}
                            <Link to={`/profile/${payment}`}>
                              <FormattedMessage id="profile.seePayment" />
                            </Link>
                            <div className="date">
                              {moment(start_date).format('ll')}
                              <span> - </span>
                              {moment(end_date).format('ll')}
                              <br />
                              {active ? (
                                <FormattedMessage
                                  id="profile.subscriptionDaysLeft"
                                  values={{
                                    days: moment(end_date).diff(moment().today, 'days') + 1,
                                  }}
                                />
                              ) : (
                                <FormattedMessage
                                  id="profile.subscriptionDays"
                                  values={{
                                    days: moment(end_date).diff(moment(start_date), 'days') + 1,
                                  }}
                                />
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <FormattedMessage id="profile.noSubscriptions" />
                  )}
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
