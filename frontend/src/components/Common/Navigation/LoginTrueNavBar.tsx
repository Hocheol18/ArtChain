import {
  Box,
  Center,
  Flex,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useToast,
} from "@chakra-ui/react";
import AddCoinIcon from "../../../assets/add-coin-icon.svg";
import ProfileIcon from "../../../assets/profile-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { LogoutAxios } from "../../../api/user";
import useUserInfo from "../../../store/useUserInfo";
import settings from "../../../assets/setting.svg";
import wallet from "../../../assets/wallet.svg";
import copy from "../../../assets/copy.svg";
import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { formatNumberWithComma } from "../Comma";

interface Prop {
  userCoin: number;
}

export const LoginTrueNavBar = ({ userCoin }: Prop) => {
  const navigate = useNavigate();

  function clearFunction() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const clearUserIdStorage = useUserInfo.persist.clearStorage;
    sessionStorage.removeItem("accessToken");
    setUserInfo({
      profileUrl: "",
      nickname: "",
      walletBalance: "",
      isLogin: false,
      metamask: "",
      walletAddress: "",
    });
    clearUserIdStorage();
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
            <Text as={"b"}>로그아웃 성공</Text>
          </Center>
        </Flex>
      ),
    });
    navigate("../");
  }

  const { userInfo, setUserInfo } = useUserInfo();
  const toast = useToast();

  const handleCharge = () => {
    navigate("/charge");
  };

  const handleExchange = () => {
    navigate("/exchange");
  };

  return (
    <Popover isLazy>
      <Box
        display="flex"
        alignItems={"center"}
        width={150}
        justifyContent={"space-between"}
      >
        <Box position={"relative"}>
          <Link to="/charge">
            <Image
              boxSize={9}
              src={AddCoinIcon}
              position="absolute"
              top="-9px"
              left="-5px"
            />
          </Link>
          <Text
            textAlign={"center"}
            ml={4}
            pl={3}
            fontSize={12}
            width={24}
            border="1px solid"
            borderRadius={"lg"}
            borderColor="#DBDDE0"
          >
            {userCoin}
          </Text>
        </Box>

        <PopoverTrigger>
          <Box>
            <Image boxSize={8} src={ProfileIcon} />
            {/* <Avatar boxSize="8" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /> */}
          </Box>
        </PopoverTrigger>
      </Box>

      <PopoverContent
        borderColor={"blue.200"}
        bgGradient={"linear(to-r, #16d9e3 0%, #30c7ec 50%, #46aef7 90%)"}
        w="390px"
        h={"160px"}
        color="white"
      >
        <PopoverBody>
          <Flex ml={"1rem"}>
            <Image boxSize={"1rem"} src={wallet} mt={"0.8rem"} />
            <Text fontSize={"1rem"} ml={"0.4rem"} mt={"0.7rem"} color={"black"}>
              {userInfo.walletAddress}...
            </Text>
            <Image boxSize={"1rem"} src={copy} ml={"0.5rem"} mt={"1rem"} />
          </Flex>
          <Flex mt={"0.5rem"}>
            <Text color={"black"} as={"b"} fontSize={"1.7rem"} ml={"1rem"}>
              {userInfo.nickname}님
            </Text>
            {userInfo.isLogin ? (
              <Image
                boxSize={"1rem"}
                src={settings}
                ml={"0.5rem"}
                mt={"0.8rem"}
                onClick={() =>
                  LogoutAxios()
                    .then(() => clearFunction())
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
                            <WarningTwoIcon
                              boxSize={5}
                              color={"white"}
                              ml={"0.5rem"}
                            />
                            <Center ml={"1rem"}>
                              <Text as={"b"}>로그아웃 실패</Text>
                            </Center>
                          </Flex>
                        ),
                      })
                    )
                }
              />
            ) : null}
          </Flex>
          <Flex>
            <Box h={"40px"} ml={"1rem"} w={"170px"}>
              <Text as={"b"} fontSize={"2rem"} color={"black"}>
                {formatNumberWithComma(Number(userInfo.walletBalance))}
              </Text>
              <Text as={"b"} fontSize={"1.5rem"} ml={"0.5rem"} color={"black"}>
                아트
              </Text>
            </Box>
            <Flex ml={"1.5rem"}>
              <Box
                w={"60px"}
                h={"30px"}
                py={"0.3rem"}
                rounded={"0.7rem"}
                mt={"0.7rem"}
                fontSize={"sm"}
                bgColor={"blue.300"}
                onClick={handleCharge}
              >
                <Center color={"white.100"}>충전</Center>
              </Box>
              <Box
                w={"60px"}
                h={"30px"}
                py={"0.3rem"}
                rounded={"0.7rem"}
                mt={"0.7rem"}
                fontSize={"sm"}
                bgColor={"white.100"}
                ml={"0.8rem"}
                onClick={handleExchange}
              >
                <Center color={"blue.400"}>환전</Center>
              </Box>
            </Flex>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
