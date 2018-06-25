import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

@inject('userStore')
@observer
class ProfileEdit extends Component {
  handleSubmit = ({ identifier, password }) => {
    const { userStore: { login }, history } = this.props;

    return login({ identifier, password })
      .then(() => history.push('/profile'))
      .catch(({ data: { message: error } }) => Promise.reject(error));
  }

  render() {
    return (
      <div className="ProfileEdit">
        <Grid>
          <h2><FormattedMessage id="profileEdit.title" /></h2>
          {/* <FormLogin onSubmit={this.handleSubmit} /> */}
        </Grid>
      </div>
    );
  }
}

export default ProfileEdit;
