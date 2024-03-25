import mainAxios from "./https";
const https = mainAxios();
import { LoginInterface, UserErnollInterface } from "../type/login";

// urls
const loginurl = "member/login";
const userProfileurl = "member/individual";
const userEnrollurl = "/member/individual/join";

// Axios
async function ProfileAxios(accessToken: string) {
  return await https.get(userProfileurl, {
    headers: {
      Authorization: accessToken,
    },
  });
}

async function UserEnrollAxios(data: UserErnollInterface) {
  return await https.post(userEnrollurl, data);
}

async function LoginAxios(data: LoginInterface) {
  return await https.post(loginurl, data);
}

export { LoginAxios, ProfileAxios, UserEnrollAxios };
