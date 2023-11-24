import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  headers: {
    'Accept': 'application/json',
  },
});

export default instance;