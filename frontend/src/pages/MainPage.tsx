import React from "react";
import { Box } from "@chakra-ui/react";
import { TopNavBar } from "../components/Common/Navigation/TopNavBar";
import { BottomNavBar } from "../components/Common/Navigation/BottomNavBar";

export const MainPage = () => {
  return (
    <div>
      <Box>
        <TopNavBar navType="logo" />
      </Box>
      <div>메인페이지</div>
      <Box>
        <BottomNavBar navType="home" />
      </Box>
    </div>
  );
};
