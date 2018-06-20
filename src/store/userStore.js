import { observable, action, computed } from 'mobx';
import { updateApi } from '../api';
import { localStorage } from '../utils';
import { login, register } from '../api/user';

export default class UserStore {
  constructor() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (token && user) {
      this.token = token;
      this.user = user;
      updateApi({ headers: { Authorization: `Bearer ${token}` } });
    }
  }

  @observable token = null;
  @observable user = null;
  @observable isLoading = false;
  @observable loadingError = false;

  makeCall = (action, ...rest) => {
    this.isLoading = true;

    return action(...rest)
      .then(({ data }) => {
        this.isLoading = false;
        return data;
      })
      .catch(err => {
        this.isLoading = false;
        this.loadingError = true;
        return err;
      });
  }

  saveUserData = data => {
    this.user = data.user;
    this.token = data.jwt;
    localStorage.setItem('token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));
    updateApi({ headers: { Authorization: `Bearer ${data.jwt}` } });

    return data;
  }

  @action login = data => this.makeCall(login, data)
    .then(this.saveUserData);

  @action logout = () => {
    this.token = null;
    this.user = null;
    updateApi({ headers: {} });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  @action register = data => register(data)
    .then(this.saveUserData);

  @computed get authenticated() {
    return !!(this.user && this.token);
  }
}
