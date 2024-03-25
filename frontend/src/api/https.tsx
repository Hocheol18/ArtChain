import axios from "axios";

export default function mainAxios() {
  return axios.create({
    baseURL: "/api",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    withCredentials: true,
  });
}
