import { Button } from "@chakra-ui/react";

import { ProfileAxios, LoginAxios, UserEnrollAxios } from "../api/user";
import useUserInfo from "../store/useUserInfo";

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
  const { setUserInfo } = useUserInfo();

  return (
    <>
      <Button
        bgColor={"blue.200"}
        onClick={() =>
          ProfileAxios()
            .then((res) =>
              setUserInfo({
                profileUrl: "",
                nickname: "김지은",
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
          LoginAxios(data)
            .then((res) =>
              sessionStorage.setItem("accessToken", res.headers.authorization)
            )
            .catch((err) => console.log(err))
        }
      >
        flr
      </Button>
    </>
  );
};
