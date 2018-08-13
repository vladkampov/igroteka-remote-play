import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Button, Alert } from 'react-bootstrap';
import { reactiveMobxForm, Control } from 'reactive-mobx-form';
import { ReactiveFormControl } from '../../components';

@reactiveMobxForm('formAccountGenerator', {
  schema: {
    email: ['', 'email|required|max:255|min:3'],
  },
})
@injectIntl
class FormAccountGenerator extends Component {
  render() {
    const { submit, intl, valid, submitting, submitError } = this.props;

    return (
      <form onSubmit={submit} className="form-inline">
        <Control
          name="email"
          component={ReactiveFormControl}
          type="text"
          label={intl.formatMessage({ id: 'accountGenerator.form.email' })}
        />
        <Button bsSize="large" type="submit" disabled={!valid || submitting}>
          <FormattedMessage id="accountGenerator.form.submit" />
        </Button>
        {submitError && (
          <Alert bsStyle="danger">
            {submitError}
          </Alert>
        )}
      </form>
    );
  }
}

export default FormAccountGenerator;
