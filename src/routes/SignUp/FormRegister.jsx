import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Button, Alert } from 'react-bootstrap';
import { reactiveMobxForm, Control } from 'reactive-mobx-form';
import { ReactiveFormControl } from '../../components';

@reactiveMobxForm('formRegister', {
  schema: {
    username: ['', 'required|max:255|min:3'],
    email: ['', 'required|max:255|min:3|email'],
    password: ['', 'required|max:20|min:6|same:password-check'],
    'password-check': ['', 'required|max:20|min:6|same:password'],
  },
})
@injectIntl
class FormRegister extends Component {
  render() {
    const { submit, intl, valid, submitting, submitError } = this.props;
    return (
      <form onSubmit={submit}>
        <div>
          <Control
            name="username"
            component={ReactiveFormControl}
            type="text"
            label={intl.formatMessage({ id: 'register.form.username' })}
          />
        </div>
        <div>
          <Control
            name="email"
            component={ReactiveFormControl}
            type="text"
            label={intl.formatMessage({ id: 'register.form.email' })}
          />
        </div>
        <div>
          <Control
            name="password"
            component={ReactiveFormControl}
            type="password"
            label={intl.formatMessage({ id: 'register.form.password' })}
          />
        </div>
        <div>
          <Control
            name="password-check"
            component={ReactiveFormControl}
            type="password"
            label={intl.formatMessage({ id: 'register.form.passwordCheck' })}
          />
        </div>
        {submitError && (
          <Alert bsStyle="danger">
            {submitError}
          </Alert>
        )}
        <Button bsSize="large" type="submit" disabled={!valid || submitting}>
          <FormattedMessage id="register.form.submit" />
        </Button>
      </form>
    );
  }
}

export default FormRegister;
