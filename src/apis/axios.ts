import axios from 'axios';
import { SERVER_URL } from './constants';

const instance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Accept': 'application/json',
  },
});

export default instance;