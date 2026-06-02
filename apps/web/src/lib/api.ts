import axios from 'axios';
import { demoAdapter } from './demo-mock';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api/v1';
const IS_DEMO = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: !IS_DEMO,
  timeout: 10000,
  ...(IS_DEMO && { adapter: demoAdapter }),
});

// Interceptor para injetar token JWT (apenas fora do modo demo)
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

// Interceptor de resposta — refresh token automático
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) throw new Error('No refresh token');

        const { data } = await axios.post(`${API_URL}/auth/refresh`, { refreshToken });
        localStorage.setItem('access_token', data.accessToken);
        localStorage.setItem('refresh_token', data.refreshToken);

        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(originalRequest);
      } catch {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        if (typeof window !== 'undefined') {
          const returnUrl = encodeURIComponent(window.location.pathname + window.location.search);
          window.location.href = `/entrar?returnUrl=${returnUrl}&motivo=sessao-expirada`;
        }
      }
    }

    return Promise.reject(error);
  },
);

export default api;
