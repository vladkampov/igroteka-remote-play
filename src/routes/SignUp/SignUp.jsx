import React, { Component } from "react";
import { inject } from 'mobx-react';
import { Grid } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';
import FormRegister from './FormRegister';

@inject('userStore', 'formStore')
class SignUp extends Component {
  state = { error: null }

  handleSubmit = data => {
    const { userStore: { register }, history } = this.props;

    delete data['password-check'];

    register(data)
      .then(() => history.push('/profile'))
      .catch(({ data: { message: error } }) => Promise.reject(error));
  }

  render() {
    return (
      <div className="Login">
        <Grid>
          <h2><FormattedMessage id="register.title" /></h2>
          <FormRegister onSubmit={this.handleSubmit} />
        </Grid>
      </div>
    );
  }
}

export default SignUp;