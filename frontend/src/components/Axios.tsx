import { Button } from "@chakra-ui/react";
import React from "react";
import {
  ProfileAxios,
  LoginAccessTokenAxios,
  UserEnrollAxios,
  RefreshTokenAxios,
} from "../api/login";

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
  return (
    <>
      <Button
        bgColor={"blue.200"}
        onClick={() =>
          LoginAccessTokenAxios(data).then((res: any) =>
            ProfileAxios(res.headers.authorization)
              .then((res) => console.log(res))
              .catch((err) => console.log(err))
          )
        }
      >
        userconfirm{" "}
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
    </>
  );
};
