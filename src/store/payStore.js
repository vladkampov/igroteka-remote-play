import { observable, action } from 'mobx';
import { payQiwi, payStatus } from '../api/pay';

export default class PayStore {
  @observable paymentStatus = null;
  @observable payStatus = 'CREATED'; // CREATED|PENDING|PROCESSING|FAILED|SUCCESS
  @observable isLoading = false;
  @observable loadingError = null;

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
        return Promise.reject(err);
      });
  }

  @action pay = data => this.makeCall(payQiwi, data)
    .then(url => {
      const win = window.open(url, '_blank');
      win.focus();
    });

  @action getPayStatus = () => this.makeCall(payStatus)
    .then(({ data }) => {
      this.payStatus = data;
      return data;
    })
}
