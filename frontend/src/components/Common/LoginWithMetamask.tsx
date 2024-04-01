import MetaMask from "../Login/Metamask";

import { useNavigate } from "react-router-dom";
import { EnrollMetamask, LoginAxios, ProfileAxios } from "../../api/user";
import { LoginInterface } from "../../type/login.interface";
import useUserInfo from "../../store/useUserInfo";
import { useCustomToast } from "./Toast";

export const useLoginWithMetamask = (values: LoginInterface, isBusiness: boolean) => {
  const navigate = useNavigate();
  const { setUserInfo } = useUserInfo();
  const toastFunction = useCustomToast();

  const LoginWithMetamask = () => {
    LoginAxios(values)
      .then((res) => loginDone(res))
      .catch(() => toastFunction("로그인 실패 다시 시도해주세요", false));
  };

  const effect = (res: any) => {
    if (res.data.data.memberUserMypageResponseDtoList[0].name === "관리자") {
      setTimeout(() => {
        toastFunction("관리자입니다", true);
        setUserInfo({
          profileUrl: "",
          nickname: "관리자",
          walletBalance: "",
          isLogin: true,
          metamask: "",
          walletAddress: "",
          userId: "artAdmin",
          isBusiness: false
        });
        navigate("../admin")
      }, 2000);
    } else {
      tmp(
        res.data.data.memberUserMypageResponseDtoList[0].name,
        res.data.data.memberUserMypageResponseDtoList[0].walletBalance,
        res.data.data.memberUserMypageResponseDtoList[0].walletAddress
      );
    }
  };

  const tmp = async (
    nickname: string,
    walletBalance: string,
    walletAddress: string
  ) => {
    const res = await MetaMask();
    switch (res) {
      case "MetamaskUninstall":
        sessionStorage.removeItem("accessToken");
        setTimeout(() => {
          toastFunction("메타마스크 지갑을 설치해주세요", false);
          window.open("https://metamask.app.link/dapp/j10a708.p.ssafy.io");
        }, 2000);

        break;
      case "MetamaskRejct":
        sessionStorage.removeItem("accessToken");
        setTimeout(() => {
          toastFunction("사용자 거절 다시 시도해주세요", false);
          navigate("../main");
        }, 2000);

        break;
      case "MetamaskAccountNotFound":
        sessionStorage.removeItem("accessToken");
        setTimeout(() => {
          toastFunction("다른 계정을 선택해주세요", false);
          navigate("../main");
        }, 2000);

        break;
      default:
        if (walletAddress === null) {
          EnrollMetamask({ walletAddress: res, walletPassword: "" }).then(
            () => {
              setTimeout(() => {
                toastFunction("메타마스크 연결 성공", true);
                setUserInfo({
                  profileUrl: "",
                  nickname: nickname,
                  walletBalance: walletBalance,
                  isLogin: true,
                  metamask: res,
                  walletAddress: walletAddress,
                  userId: values.username,
                  isBusiness: isBusiness
                });
              }, 2000);
            }
          );
        } else if (walletAddress.toLowerCase() !== res.toLowerCase()) {
          sessionStorage.removeItem("accessToken");
          setTimeout(() => {
            toastFunction(
              "처음에 등록한 메타마스크 계정을 연결해주세요",
              false
            );
          }, 2000);
        } else {
          setTimeout(() => {
            toastFunction("메타마스크 연결 성공", true);
            setUserInfo({
              profileUrl: "",
              nickname: nickname,
              walletBalance: walletBalance,
              isLogin: true,
              metamask: res,
              walletAddress: walletAddress,
              userId: values.username,
              isBusiness: isBusiness
            });
          }, 2000);
        }
        navigate("../main");
        break;
    }
  };

  const loginDone = async (res: any) => {
    sessionStorage.setItem("accessToken", res.headers.authorization);
    try {
      await ProfileAxios().then((res) => effect(res));
      toastFunction("로그인 성공", true);
    } catch (err) {
      console.log(err);
    }
  };
  return { LoginWithMetamask };
};
