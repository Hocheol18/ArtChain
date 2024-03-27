import { Button } from "@chakra-ui/react";
import React from "react";

import {
  ProfileAxios,
  LoginAccessTokenAxios,
  UserEnrollAxios,
  RefreshTokenAxios,
} from "../api/login";
import useUserInfo from "../store/useUserInfo";
import useUserAccessToken from "../store/accessToken";

export const AxiosFunction = () => {
  const data = { username: "didifia", password: "1234" };
  const enrolldata = {
    memberId: "dminonbabo",
    password: "1234",
    name: "김영욱",
    email: "didid",
    bankName: "국민은행",
    bankAccount: "2441230099231",
  };
  const { userInfo, setUserInfo } = useUserInfo();
  const { setUserAccessToken } = useUserAccessToken();

  return (
    <>
      <Button
        bgColor={"blue.200"}
        onClick={() =>
          ProfileAxios()
            .then((res) =>
              setUserInfo({
                profileUrl: "",
                nickname: "",
                walletBalance:
                  res.data.data.memberUserMypageResponseDtoList[0]
                    .walletBalance,
                isLogin: true,
              })
            )
            .catch((err) => console.log(err))
        }
      >
        user{" "}
      </Button>
      <Button
        onClick={() =>
          UserEnrollAxios(enrolldata)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }
      >
        signup
      </Button>
      <Button
        onClick={() =>
          RefreshTokenAxios()
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }
      >
        refresh
      </Button>
      {/* <Button
        onClick={() =>
          ProfileAxios()
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }
      >
        Profile
      </Button> */}
      <Button
        onClick={() =>
          LoginAccessTokenAxios(data)
            .then((res) => setUserAccessToken(res.headers.authorization))
            .catch((err) => console.log(err))
        }
      >
        flr
      </Button>
    </>
  );
};
