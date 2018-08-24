import { observable, action } from 'mobx';
import { payQiwi, payStatus } from '../api/pay';

export default class PayStore {
  @observable paymentStatus = null;
  @observable payStatus = 'processing'; // CREATED|PENDING|PROCESSING|FAILED|SUCCESS
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
    .then(url => window.location.replace(url));

  @action getPayStatus = () => this.makeCall(payStatus)
    .then(status => {
      this.payStatus = status;
      return status;
    })
}
