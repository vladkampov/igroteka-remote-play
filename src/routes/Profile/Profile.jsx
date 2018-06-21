import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Loader } from '../../components';

@inject('userStore')
@observer
class Profile extends Component {
  componentDidMount() {
    this.props.userStore.getUser();
  }

  render() {
    const { userStore } = this.props;

    if (userStore.isLoading) {
      return <Loader />;
    }

    const { user: { username, email } } = userStore;
    return (
      <div className="Profile">
        <Grid>
          <Row>
            <Col md={4}>
              <Image src={null} thumbnail />
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
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Profile;
