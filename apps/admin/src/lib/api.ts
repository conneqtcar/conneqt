import axios from 'axios';
import { demoAdapter } from './demo-mock';

const IS_DEMO = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001'}/api/v1`,
  headers: { 'Content-Type': 'application/json' },
  ...(IS_DEMO && { adapter: demoAdapter }),
});

api.interceptors.request.use((config) => {
  if (IS_DEMO) return config;
  const token = typeof window !== 'undefined' ? localStorage.getItem('admin_access_token') : null;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      try {
        const refreshToken = localStorage.getItem('admin_refresh_token');
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001'}/api/v1/auth/refresh`,
          { refreshToken },
        );
        localStorage.setItem('admin_access_token', data.accessToken);
        localStorage.setItem('admin_refresh_token', data.refreshToken);
        original.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(original);
      } catch {
        localStorage.removeItem('admin_access_token');
        localStorage.removeItem('admin_refresh_token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  },
);

export default api;
