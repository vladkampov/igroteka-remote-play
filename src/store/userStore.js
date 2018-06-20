import { updateApi } from '../api';
import { localStorage } from '../utils';
import { observable, action } from 'mobx';
import { login, register } from '../api/user';

export class UserStore {
  constructor() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('user_id');

    if (token && userId) {
      this.token = token;
      this.user = userId;
      updateApi({ headers: { 'Authorization': `Bearer ${token}` } });
    }
  }

  @observable token = null;
  @observable user = null;

  saveUserData = ({ data }) => {
    this.user = data.user;
    this.token = data.jwt;
    localStorage.setItem('token', data.jwt);
    localStorage.setItem('user_id', data.user._id);
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
    localStorage.removeItem('user_id');
  }

  @action register = data => register(data)
    .then(this.saveUserData);
}
