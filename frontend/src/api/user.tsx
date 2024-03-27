import { localAxios } from "./https";
import { LoginInterface, UserErnollInterface } from "../type/login";

// urls
const loginurl = "/member/login";
const userProfileurl = "/member/individual";
const userEnrollurl = "/member/individual/join";
const refreshurl = "/member/refresh";
const logouturl = "/member/logout";

// 프로필 함수
async function ProfileAxios() {
  return await localAxios.get(userProfileurl);
}

// 로그아웃 함수
async function LogoutAxios() {
  return await localAxios.post(logouturl);
}

// 리프레시 토큰 함수
async function RefreshTokenAxios(accessToken: string) {
  return await localAxios.post(refreshurl, {
    headers: {
      Authorization: accessToken,
    },
  });
}

// 회원가입 함수
async function UserEnrollAxios(data: UserErnollInterface) {
  return await localAxios.post(userEnrollurl, data);
}

// 로그인 함수
async function LoginAxios(data: LoginInterface) {
  return await localAxios.post(loginurl, data);
}

export {
  LoginAxios,
  ProfileAxios,
  UserEnrollAxios,
  RefreshTokenAxios,
  LogoutAxios,
};
