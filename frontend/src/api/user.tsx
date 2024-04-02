import { localAxios } from "./https";
import {
  BusinessEnrollInterface,
  LoginInterface,
  UserErnollInterface,
  SignUpPermissionInterface,
} from "../type/login.interface";
import { makeQuerystring } from "../utils/ApiUtils";
import { BusinessMyPageResponse } from "../type/mypage.interface";

// urls
const loginurl = "/member/login";
const userProfileurl = "/member/individual";
const userEnrollurl = "/member/individual/join";
const refreshurl = "/member/refresh";
const logouturl = "/member/logout";
const IsEnrollurl = "/member/checkId";
const businessEnrollurl = "/member/enterprise/join";
const enrollMetamaskurl = "/member/walletInfo";
const businessMyPageurl = "/member/enterprise";
const SignUpPermissionurl = "/member/permission";

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
  })}`;

  return await localAxios.get(url);
}

// 기업 회원가입 함수
async function BusinessEnrollAxios(data: BusinessEnrollInterface) {
  return await localAxios.post(businessEnrollurl, data);
}

async function EnrollMetamask(data: {
  walletAddress: string;
  walletPassword: string;
}) {
  return await localAxios.put(enrollMetamaskurl, data);
}

// 기업 마이페이지
async function BusinessMyPageAxios(): Promise<BusinessMyPageResponse> {
  const response = await localAxios.get(businessMyPageurl);
  return response.data.data;
}

// 기업 회원가입 승인 대기 리스트(관리자)
async function SignUpPermissionListAxios() {
  const response = await localAxios.get(SignUpPermissionurl);

  return response.data.data;
}

// 기업 회원가입 승인(관리자)
async function PutSignUpPermissionAxios(data: SignUpPermissionInterface) {
  const { memberId, permissionFlag } = data;
  const url = `${SignUpPermissionurl}${makeQuerystring({
    memberId,
    permissionFlag,
  })}`;
  const response = await localAxios.put(url, data);

  return response.data.data;
}

export {
  LoginAxios,
  ProfileAxios,
  UserEnrollAxios,
  RefreshTokenAxios,
  LogoutAxios,
  IsEnrollAxios,
  BusinessEnrollAxios,
  EnrollMetamask,
  BusinessMyPageAxios,
  SignUpPermissionListAxios,
  PutSignUpPermissionAxios,
};
