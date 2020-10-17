import axios from 'axios';

const api = axios.create({
  /* Open your Expo and copy the IP below connection (exp://192.168.15.10:19000) without the port */
  baseURL: 'http://192.168.15.10:3333'
});

export default api;