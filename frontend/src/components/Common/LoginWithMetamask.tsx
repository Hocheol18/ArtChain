import { Center, Flex, useToast, Text } from "@chakra-ui/react";
import MetaMask from "../Login/Metamask";
import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { EnrollMetamask, LoginAxios, ProfileAxios } from "../../api/user";
import { LoginInterface } from "../../type/login.interface";
import useUserInfo from "../../store/useUserInfo";

export const useLoginWithMetamask = (values: LoginInterface) => {
  const toast = useToast();
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useUserInfo();

  console.log(values);

  const LoginWithMetamask = () => {
    LoginAxios(values)
      .then((res) => loginDone(res))
      .catch(() =>
        toast({
          duration: 2000,
          isClosable: true,
          position: "top",
          render: () => (
            <Flex
              color="white"
              mt={"50px"}
              bg="#C70000"
              p={"1rem"}
              borderRadius={"0.7rem"}
              alignItems={"center"}
            >
              <WarningTwoIcon boxSize={5} color={"white"} ml={"0.5rem"} />
              <Center ml={"1rem"}>
                <Text as={"b"}>로그인 실패</Text>
              </Center>
            </Flex>
          ),
        })
      );
  };

  const effect = (res: any) => {
    tmp(
      res.data.data.memberUserMypageResponseDtoList[0].name,
      res.data.data.memberUserMypageResponseDtoList[0].walletBalance,
      res.data.data.memberUserMypageResponseDtoList[0].walletAddress
    );
  };

  const tmp = async (
    nickname: string,
    walletBalance: string,
    walletAddress: string
  ) => {
    const res = await MetaMask();
    switch (res) {
      case "MetamaskUninstall":
        toast({
          duration: 2000,
          isClosable: true,
          position: "top",
          render: () => (
            <Flex
              color="white"
              mt={"50px"}
              bg="#C70000"
              p={"1rem"}
              borderRadius={"0.7rem"}
              alignItems={"center"}
            >
              <WarningTwoIcon boxSize={5} color={"white"} ml={"0.5rem"} />
              <Center ml={"1rem"}>
                <Text as={"b"}>메타마스크를 설치해주세요</Text>
              </Center>
            </Flex>
          ),
        });
        navigate("https://metamask.app.link/dapp/j10a708.p.ssafy.io");
        break;
      case "MetamaskRejct":
        toast({
          duration: 2000,
          isClosable: true,
          position: "top",
          render: () => (
            <Flex
              color="white"
              mt={"50px"}
              bg="#C70000"
              p={"1rem"}
              borderRadius={"0.7rem"}
              alignItems={"center"}
            >
              <WarningTwoIcon boxSize={5} color={"white"} ml={"0.5rem"} />
              <Center ml={"1rem"}>
                <Text as={"b"}>사용자 거절</Text>
              </Center>
            </Flex>
          ),
        });
        break;
      case "MetamaskAccountNotFound":
        toast({
          duration: 2000,
          isClosable: true,
          position: "top",
          render: () => (
            <Flex
              color="white"
              mt={"50px"}
              bg="#C70000"
              p={"1rem"}
              borderRadius={"0.7rem"}
              alignItems={"center"}
            >
              <WarningTwoIcon boxSize={5} color={"white"} ml={"0.5rem"} />
              <Center ml={"1rem"}>
                <Text as={"b"}>계정을 찾을 수 없습니다</Text>
              </Center>
            </Flex>
          ),
        });
        break;
      default:
        console.log(res);
        if (walletAddress === "") {
          EnrollMetamask({ walletAddress: res, walletPassword: "" });
        } else if (walletAddress !== res) {
          toast({
            duration: 2000,
            isClosable: true,
            position: "top",
            render: () => (
              <Flex
                color="white"
                mt={"50px"}
                bg="#C70000"
                p={"1rem"}
                borderRadius={"0.7rem"}
                alignItems={"center"}
              >
                <WarningTwoIcon boxSize={5} color={"white"} ml={"0.5rem"} />
                <Center ml={"1rem"}>
                  <Text as={"b"}>
                    처음에 등록한 메타마스크 계정을 연결해주세요
                  </Text>
                </Center>
              </Flex>
            ),
          });
        } else {
          setTimeout(() => {
            toast({
              duration: 2000,
              isClosable: true,
              position: "top",
              render: () => (
                <Flex
                  color="white"
                  mt={"50px"}
                  bg="blue.300"
                  p={"1rem"}
                  borderRadius={"0.7rem"}
                  alignItems={"center"}
                >
                  <WarningTwoIcon boxSize={5} color={"white"} ml={"0.5rem"} />
                  <Center ml={"1rem"}>
                    <Text as={"b"}>메타마스크 연결 성공</Text>
                  </Center>
                </Flex>
              ),
            });
            setUserInfo({
              profileUrl: "",
              nickname: nickname,
              walletBalance: walletBalance,
              isLogin: true,
              metamask: res,
              walletAddress: walletAddress,
              userId: values.username,
            });
          }, 2000);
        }
        break;
    }
  };

  const loginDone = async (res: any) => {
    sessionStorage.setItem("accessToken", res.headers.authorization);
    try {
      await ProfileAxios().then((res) => effect(res));
      toast({
        duration: 2000,
        isClosable: true,
        position: "top",
        render: () => (
          <Flex
            color="white"
            mt={"50px"}
            bg="blue.300"
            p={"1rem"}
            borderRadius={"0.7rem"}
            alignItems={"center"}
          >
            <CheckCircleIcon boxSize={5} color={"white"} ml={"0.5rem"} />
            <Center ml={"1rem"}>
              <Text as={"b"}>로그인 성공</Text>
            </Center>
          </Flex>
        ),
      });

      navigate("../main");
    } catch (err) {
      console.log(err);
    }
  };
  return { LoginWithMetamask };
};
