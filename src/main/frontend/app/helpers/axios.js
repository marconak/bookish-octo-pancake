import axios from 'axios';
import Storage from '../helpers/storage.js';

const onRequestSuccess = config => {
  var token = Storage.getToken();

  if (token && token !== null) {
    config.headers[Storage.HEADERS_KEY] = token;
  }
  return config;
};

axios.interceptors.request.use(onRequestSuccess);
