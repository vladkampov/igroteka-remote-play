import { updateApi } from '../api';
import { localStorage } from '../utils';
import { observable, action } from 'mobx';
import { login, register } from '../api/user';

export class UserStore {
  constructor() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (token && user) {
      this.token = token;
      this.user = user;
      updateApi({ headers: { 'Authorization': `Bearer ${token}` } });
    }
  }

  @observable token = null;
  @observable user = null;

  saveUserData = ({ data }) => {
    this.user = data.user;
    this.token = data.jwt;
    localStorage.setItem('token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));
    updateApi({ headers: { 'Authorization': `Bearer ${data.jwt}` } })

    return data;
  }
  
  @action login = data => login(data)
    .then(this.saveUserData);

  @action logout = () => {
    this.token = null;
    this.user = null;
    updateApi({ headers: {} })
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  @action register = data => register(data)
    .then(this.saveUserData);
}
