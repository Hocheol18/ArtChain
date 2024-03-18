import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

interface NavProp {
  navType: string;
}

export const TopNavBar = ({ navType }: NavProp) => {
  const rightPadding = 15;
  const [leftPadding, setLeftPadding] = useState<number>(15);
  const [justifyCon, setJustifyCon] = useState<string>("space-between");

  //   로그인 유무
  const [isLogin, setIsLogin] = useState<boolean>(false);

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
        py="10"
        display="flex"
        justifyContent={justifyCon}
        border="1px black solid"
      >
        {navType === "logo" ? (
          <>
            <Box>로고</Box>
            {isLogin ? <Box>로그인2222</Box> : <Box>로그인</Box>}
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
