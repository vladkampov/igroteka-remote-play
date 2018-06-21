import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Button, Alert } from 'react-bootstrap';
import { reactiveMobxForm, Control } from 'reactive-mobx-form';
import { ReactiveFormControl } from '../../components';

@reactiveMobxForm('formLogin', {
  schema: {
    email: ['', 'required|max:255|min:3'],
    password: ['', 'required|max:20|min:6'],
  },
})
@injectIntl
class FormLogin extends Component {
  render() {
    const { submit, intl, valid, submitting, submitError } = this.props;

    return (
      <form onSubmit={submit}>
        <Control
          name="identifier"
          component={ReactiveFormControl}
          type="text"
          label={intl.formatMessage({ id: 'login.form.identifier' })}
        />
        <Control
          name="password"
          component={ReactiveFormControl}
          type="password"
          label={intl.formatMessage({ id: 'login.form.password' })}
        />
        {submitError && (
          <Alert bsStyle="danger">
            {submitError}
          </Alert>
        )}
        <Button bsSize="large" type="submit" disabled={!valid || submitting}>
          <FormattedMessage id="login.form.submit" />
        </Button>
      </form>
    );
  }
}

export default FormLogin;
