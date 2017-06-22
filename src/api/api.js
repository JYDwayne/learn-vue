import axios from 'axios';

let base = '';

const requestLogin = params => { return axios.post(`${base}/login`, params); };

export default{
	requestLogin
}