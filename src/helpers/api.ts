import axios from "axios";
import { useAuthStore } from "../app/store/user";

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore();
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const store = useAuthStore();
    if (err.response?.status === 401 && store.refreshToken) {
      try {
        await store.refresh();
        err.config.headers.Authorization = `Bearer ${store.accessToken}`;
        return api.request(err.config);
      } catch {
        store.logout();
      }
    }
    return Promise.reject(err)
  }
);

export default api;
