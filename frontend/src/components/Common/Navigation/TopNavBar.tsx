import React, { useEffect, useState } from "react";
import { Box, Flex, Button, Image, Text } from "@chakra-ui/react";
import Logo from "../../../assets/logo.svg";
import AddCoinIcon from "../../../assets/add-coin-icon.svg";
import ProfileIcon from "../../../assets/profile-icon.svg";

interface NavProp {
  navType: string;
}

export const TopNavBar = ({ navType }: NavProp) => {
  const rightPadding = 15;
  const [leftPadding, setLeftPadding] = useState<number>(15);
  const [justifyCon, setJustifyCon] = useState<string>("space-between");

  //   로그인 유무
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const userCoin = 9999999;

  useEffect(() => {
    if (navType === "coinBack") {
      setLeftPadding(30);
    } else if (navType === "back") {
      setLeftPadding(30);
      setJustifyCon("start");
    }
  }, []);
  return (
    <div>
      <Box
        height={50}
        pl={leftPadding}
        pr={rightPadding}
        py=""
        display="flex"
        alignItems={"center"}
        justifyContent={justifyCon}
        borderBottom={"1px"}
        borderBottomColor="#EFF0F3"
      >
        {navType === "logo" ? (
          <>
            <Box>
              <Button variant="unstyled">
                <Image src={Logo} />
              </Button>
            </Box>
            {isLogin ? (
              <Box
                display="flex"
                alignItems={"center"}
                width={150}
                justifyContent={"space-between"}
              >
                <Box position={"relative"}>
                  <Image
                    boxSize={9}
                    src={AddCoinIcon}
                    position="absolute"
                    top="-9px"
                    left="-5px"
                  />
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

                <Image boxSize={8} src={ProfileIcon} />
              </Box>
            ) : (
              <Box>로그인</Box>
            )}
          </>
        ) : null}
        {navType === "coinBack" ? (
          <>
            <Box>로고</Box>
            {isLogin ? <Box>로그인2222</Box> : <Box>로그인</Box>}
          </>
        ) : null}
        {navType === "back" ? (
          <>
            <Box>로고</Box>
          </>
        ) : null}
      </Box>
    </div>
  );
};
