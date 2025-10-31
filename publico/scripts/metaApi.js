import axios from 'axios';

const api = axios.create({
  baseURL: 'https://graph.facebook.com/v18.0',
});

export default api;
