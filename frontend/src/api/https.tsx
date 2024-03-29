import axios, { AxiosInstance } from "axios";
import { RefreshTokenAxios } from "./user";

export const localAxios: AxiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  withCredentials: true,
});

// Interceptors > 요청 전에 accessToken 찾아서 넣어줌
localAxios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답이 200 에러 아닌 경우 sessionStorage를 삭제 이후 다시 axios 요청
localAxios.interceptors.response.use(
  async (response) => {
    if (response.status === 200 || response.status === 201) {
      const accessToken: string | null = sessionStorage.getItem("accessToken");
      if (accessToken) {
        sessionStorage.setItem("accessToken", accessToken);
      }
    }
    return response;
  },
  async (error) => {
    try {
      const at: string | null = sessionStorage.getItem("accessToken");
      sessionStorage.removeItem("accessToken");
      if (at) {
        await RefreshTokenAxios(at).then((res) =>
          sessionStorage.setItem("accessToken", res.headers.authorization)
        );
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
    return Promise.reject(error);
  }
);
