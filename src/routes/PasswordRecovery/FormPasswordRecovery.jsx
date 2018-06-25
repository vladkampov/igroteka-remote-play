import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Button, Alert } from 'react-bootstrap';
import { reactiveMobxForm, Control } from 'reactive-mobx-form';
import { ReactiveFormControl } from '../../components';

@reactiveMobxForm('formPasswordRecovery', {
  schema: {
    email: ['', 'required|max:255|min:3|email'],
  },
})
@injectIntl
class FormPasswordRecovery extends Component {
  render() {
    const { submit, intl, valid, submitting, submitError } = this.props;

    return (
      <form onSubmit={submit}>
        <Control
          name="email"
          component={ReactiveFormControl}
          type="email"
          label={intl.formatMessage({ id: 'passwordRecovery.form.email' })}
        />
        {submitError && (
          <Alert bsStyle="danger">
            {submitError}
          </Alert>
        )}
        <Button bsSize="large" type="submit" disabled={!valid || submitting}>
          <FormattedMessage id="passwordRecovery.form.submit" />
        </Button>
      </form>
    );
  }
}

export default FormPasswordRecovery;
