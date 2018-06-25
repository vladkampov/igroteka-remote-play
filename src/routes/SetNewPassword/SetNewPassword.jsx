import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid, Alert } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Loader } from '../../components';
import FormSetNewPassword from './FormSetNewPassword';

@inject('userStore')
@observer
class SetNewPassword extends Component {
  state = { success: false };

  componentDidMount() {
    this.props.userStore.getUser();
  }

  handleSubmit = data => this.props.userStore.resetPassword(data)
    .then(() => this.setState({ success: true }))
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
          <h2><FormattedMessage id="setNewPassword.title" /></h2>
          {this.state.success && (
            <Alert bsStyle="success">
              <FormattedMessage id="setNewPassword.success" />
            </Alert>
          )}
          <FormSetNewPassword onSubmit={this.handleSubmit} schema={{ code: privateCode }} />
        </Grid>
      </div>
    );
  }
}

export default SetNewPassword;
