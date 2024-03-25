import mainAxios from "./https";

const https = mainAxios();

const url = "member/login";

interface LoginData {
  username: string;
  password: string;
}

async function login(data: LoginData) {
  return await https.post(url, data);
}

export { login };
