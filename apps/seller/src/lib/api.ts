import axios from 'axios';
import { demoAdapter } from './demo-mock';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api/v1';
const IS_DEMO = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: !IS_DEMO,
  ...(IS_DEMO && { adapter: demoAdapter }),
});

api.interceptors.request.use((config) => {
  if (IS_DEMO) return config;
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (
      !IS_DEMO &&
      error?.response?.status === 401 &&
      typeof window !== 'undefined' &&
      !window.location.pathname.startsWith('/entrar')
    ) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      window.location.href = '/entrar';
    }
    return Promise.reject(error);
  },
);

export default api;
