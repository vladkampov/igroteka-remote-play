import config from '../config';
import api from './';

export const payQiwi = data => api(({ post }) => post(`${config('CORE_API_PLUGIN')}/payqiwi`, { data }));

export const payStatus = () => api(({ get }) => get(`${config('CORE_API_PLUGIN')}/paystatus`));
