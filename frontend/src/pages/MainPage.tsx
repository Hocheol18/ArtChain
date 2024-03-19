import React from "react";
import { Box } from "@chakra-ui/react";
import { TopNavBar } from "../components/Common/Navigation/TopNavBar";
import { BottomNavBar } from "../components/Common/Navigation/BottomNavBar";
import { useMediaQuery } from "react-responsive";

export const MainPage = () => {
  const isDesktop = useMediaQuery({ minWidth: 501 });
  return (
    <div>
      <Box>
        <TopNavBar navType="logo" />
      </Box>
      <div>메인페이지</div>
      <Box position={"fixed"} bottom={0} width={isDesktop ? "390px" : "100%"}>
        <BottomNavBar navType="home" />
      </Box>
    </div>
  );
};
