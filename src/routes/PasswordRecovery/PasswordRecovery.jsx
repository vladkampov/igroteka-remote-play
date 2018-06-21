import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid, Alert } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import FormPasswordRecovery from './FormPasswordRecovery';

@inject('userStore')
@observer
class PasswordRecovery extends Component {
  state = { success: null };

  handleSubmit = data => this.props.userStore.recoverPassword(data)
    .then(() => this.setState({ success: true }))
    .catch(({ data: { message } }) => Promise.reject(message));

  render() {
    return (
      <div>
        <Grid>
          {this.state.success && (
            <Alert bsStyle="success">
              <FormattedMessage id="passwordRecovery.success" />
            </Alert>
          )}
          <h2><FormattedMessage id="passwordRecovery.title" /></h2>
          <FormPasswordRecovery onSubmit={this.handleSubmit} />
        </Grid>
      </div>
    );
  }
}

export default PasswordRecovery;
