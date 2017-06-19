import axios from 'axios';

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params); };