import axios, { AxiosInstance } from "axios";

const localAxios: AxiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  withCredentials: true,
});

localAxios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("accessToken");
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { localAxios }