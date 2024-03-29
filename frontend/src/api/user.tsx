import { localAxios } from "./https";
import {
  BusinessEnrollInterface,
  LoginInterface,
  UserErnollInterface,
} from "../type/login.interface";
import { makeQuerystring } from "../utils/ApiUtils";

// urls
const loginurl = "/member/login";
const userProfileurl = "/member/individual";
const userEnrollurl = "/member/individual/join";
const refreshurl = "/member/refresh";
const logouturl = "/member/logout";
const IsEnrollurl = "/member/checkId";
const businessEnrollurl = "/member/enterprise/join";

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

// 일반 유저 회원가입 함수
async function UserEnrollAxios(data: UserErnollInterface) {
  return await localAxios.post(userEnrollurl, data);
}

// 로그인 함수
async function LoginAxios(data: LoginInterface) {
  const res = await localAxios.post(loginurl, data);
  return res;
}

// 유저 중복 확인 함수
async function IsEnrollAxios(checkId: string) {
  const url = `${IsEnrollurl}${makeQuerystring({
    checkId,
  })}`

  return await localAxios.get(url);
}

// 기업 회원가입 함수
async function BusinessEnrollAxios(data: BusinessEnrollInterface) {
  return await localAxios.post(businessEnrollurl, data);
}

export {
  LoginAxios,
  ProfileAxios,
  UserEnrollAxios,
  RefreshTokenAxios,
  LogoutAxios,
  IsEnrollAxios,
  BusinessEnrollAxios,
};
