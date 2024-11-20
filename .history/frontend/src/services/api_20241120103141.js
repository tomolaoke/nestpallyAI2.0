import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Update this to your backend's hosted URL

const api = axios.create({
  baseURL: API_URL,
});

export default api;
