import axios from 'axios';

const API_URL = 'https://nestpally.vercel.app/'; // Update this to your backend's hosted URL

const api = axios.create({
  baseURL: API_URL,
});

export default api;
