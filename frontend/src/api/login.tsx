import  {localAxios} from "./https";
import { LoginInterface, UserErnollInterface } from "../type/login";

// urls
const loginurl = "/member/login";
const userProfileurl = "/member/individual";
const userEnrollurl = "/member/individual/join";
const refreshurl = "/member/refresh";
const logouturl = "/member/logout";

// Axios
// 회원 인증 함수, 함수 호출 시 accessToken을 넣으면 됨!
async function ProfileAxios() {
  return await localAxios.get(userProfileurl);
}

async function LogoutAxios() {
  return await localAxios.post(logouturl);
}

async function RefreshTokenAxios() {
  return await localAxios.post(refreshurl);
}

async function UserEnrollAxios(data: UserErnollInterface) {
  return await localAxios.post(userEnrollurl, data);
}

async function LoginAccessTokenAxios(data: LoginInterface) {
  return await localAxios.post(loginurl, data);
}



export {
  LoginAccessTokenAxios,
  ProfileAxios,
  UserEnrollAxios,
  RefreshTokenAxios,
  LogoutAxios,
};
