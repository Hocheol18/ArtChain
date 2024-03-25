import mainAxios from "./https";
const https = mainAxios();
import { LoginInterface, UserErnollInterface } from "../type/login";

// urls
const loginurl = "member/login";
const userProfileurl = "member/individual";
const userEnrollurl = "/member/individual/join";
const refreshurl = "/member/refresh"

// Axios
// 회원 인증 함수, 함수 호출 시 accessToken을 넣으면 됨!
async function ProfileAxios(accessToken: string) {
  return await https.get(userProfileurl, {
    headers: {
      Authorization: accessToken,
    },
  });
}

async function RefreshTokenAxios() {
  return await https.post(refreshurl)
}

async function UserEnrollAxios(data: UserErnollInterface) {
  return await https.post(userEnrollurl, data);
}

async function LoginAccessTokenAxios(data: LoginInterface) {
  return await https.post(loginurl, data);
}

export { LoginAccessTokenAxios, ProfileAxios, UserEnrollAxios, RefreshTokenAxios };
