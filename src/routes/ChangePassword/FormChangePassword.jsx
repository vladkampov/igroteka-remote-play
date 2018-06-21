import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Button, Alert } from 'react-bootstrap';
import { reactiveMobxForm, Control } from 'reactive-mobx-form';
import { ReactiveFormControl } from '../../components';

@reactiveMobxForm('formChangePassword', {
  schema: {
    password: ['', 'required|max:20|min:6|same:passwordConfirmation'],
    passwordConfirmation: ['', 'required|max:20|min:6|same:password'],
  },
})
@injectIntl
class FormChangePassword extends Component {
  render() {
    const { submit, intl, valid, submitting, submitError } = this.props;


    return (
      <form onSubmit={submit}>
        <Control
          name="code"
          component={ReactiveFormControl}
          type="text"
          hidden
        />
        <Control
          name="password"
          component={ReactiveFormControl}
          type="password"
          label={intl.formatMessage({ id: 'changePassword.form.password' })}
        />
        <Control
          name="passwordConfirmation"
          component={ReactiveFormControl}
          type="password"
          label={intl.formatMessage({ id: 'changePassword.form.passwordConfirmation' })}
        />
        {submitError && (
          <Alert bsStyle="danger">
            {submitError}
          </Alert>
        )}
        <Button bsSize="large" type="submit" disabled={!valid || submitting}>
          <FormattedMessage id="changePassword.form.submit" />
        </Button>
      </form>
    );
  }
}

export default FormChangePassword;
