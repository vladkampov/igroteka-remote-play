import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Loader } from '../../components';
import FormChangePassword from './FormChangePassword';

@inject('userStore')
@observer
class ChangePassword extends Component {
  componentDidMount() {
    this.props.userStore.getUser();
  }

  handleSubmit = data => this.props.userStore.resetPassword(data)
    .catch(({ data: { message } }) => Promise.reject(message));

  render() {
    const { userStore, match: { params: { privateCode } } } = this.props;

    if (!userStore.user) {
      if (userStore.isLoading) {
        return <Loader />;
      }
    }

    return (
      <div>
        <Grid>
          <h2><FormattedMessage id="changePassword.title" /></h2>
          <FormChangePassword onSubmit={this.handleSubmit} schema={{ code: privateCode }} />
        </Grid>
      </div>
    );
  }
}

export default ChangePassword;
