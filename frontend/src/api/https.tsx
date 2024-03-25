import axios from "axios";

const BASEURL = "https://j10a708.p.ssafy.io/api/";

export default function mainAxios() {
  return axios.create({
    baseURL: BASEURL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    withCredentials: true,
  });
}
