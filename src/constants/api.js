import axios from 'axios';

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers.common = {
  SessionContext: 'sometoken'
};
