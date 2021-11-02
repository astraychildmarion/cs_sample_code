import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/cs',
  headers: {
    'Content-type': 'application/json',
    Authorization: '',
  },
});

export default apiClient;
