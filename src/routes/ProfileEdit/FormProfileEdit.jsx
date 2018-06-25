import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Button, Alert } from 'react-bootstrap';
import { reactiveMobxForm, Control } from 'reactive-mobx-form';
import { ReactiveFormControl } from '../../components';

@reactiveMobxForm('formProfileEdit', {
  schema: {
    email: ['', 'required|max:20|min:6|email'],
    username: ['', 'required|max:20|min:6'],
  },
})
@injectIntl
class FormProfileEdit extends Component {
  render() {
    const { submit, intl, valid, submitting, submitError } = this.props;


    return (
      <form onSubmit={submit}>
        <Control
          name="username"
          component={ReactiveFormControl}
          label={intl.formatMessage({ id: 'profileEdit.form.username' })}
          type="text"
        />
        <Control
          name="email"
          component={ReactiveFormControl}
          label={intl.formatMessage({ id: 'profileEdit.form.email' })}
          type="text"
        />
        <Control
          name="image"
          component={ReactiveFormControl}
          label={intl.formatMessage({ id: 'profileEdit.form.image' })}
          type="file"
        />
        {submitError && (
          <Alert bsStyle="danger">
            {submitError}
          </Alert>
        )}
        <Button bsSize="large" type="submit" disabled={!valid || submitting}>
          <FormattedMessage id="profileEdit.form.submit" />
        </Button>
      </form>
    );
  }
}

export default FormProfileEdit;
