import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cross-platform.rp.devfactory.com',
  withCredentials: true,
});

export default instance;
