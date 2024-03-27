import axios, { AxiosInstance } from "axios";

export const localAxios: AxiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  withCredentials: true,
});

localAxios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("AccessToken");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

localAxios.interceptors.response.use(
  async (response) => {
    console.log(response)
    if (response) {
      sessionStorage.setItem("accessToken", response.data.jwtToken.accessToken);
      sessionStorage.setItem(
        "refreshToken",
        response.data.jwtToken.refreshToken
      );
      return response;
    } else if (response.data.code === "NOT_VALID_USER") {
      sessionStorage.removeItem("accessToken");
      
      try {
        const refreshedResponse = await refreshAccessToken();
        return refreshedResponse;
      } catch (error) {
        store.dispatch(logout());
        
      }
      
    } else {
      //console.log("response", response);
      return response;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
