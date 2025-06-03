import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:8000/api', // ou IP/ngrok/link hospedado
  timeout: 5000,
});

export default api;