import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid, Breadcrumb } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import FormProfileEdit from './FormProfileEdit';


@inject('userStore')
@observer
class ProfileEdit extends Component {
  handleSubmit = ({ image, ...data }) => {
    const { userStore: { updateUser }, history } = this.props;

    const formData = new FormData();

    Object.keys(data).forEach(key => formData.append(key, data[key]));

    if (image[0]) {
      formData.append('image', image[0]);
    }

    return updateUser(formData)
      .then(() => history.push('/profile'))
      .catch(({ data: { message: error } }) => Promise.reject(error));
  }

  render() {
    const { username, email } = this.props.userStore.user;

    return (
      <div className="ProfileEdit">
        <Grid>
          <Breadcrumb>
            <Breadcrumb.Item href="/"><FormattedMessage id="breadcrumbs.home" /></Breadcrumb.Item>
            <Breadcrumb.Item href="/profile"><FormattedMessage id="breadcrumbs.profile" /></Breadcrumb.Item>
            <Breadcrumb.Item active><FormattedMessage id="breadcrumbs.profileEdit" /></Breadcrumb.Item>
          </Breadcrumb>
          <h2><FormattedMessage id="profileEdit.title" /></h2>
          <FormProfileEdit onSubmit={this.handleSubmit} schema={{ username, email }} />
        </Grid>
      </div>
    );
  }
}

export default ProfileEdit;
