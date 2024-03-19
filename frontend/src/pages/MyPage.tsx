import React from "react";
import { Box } from "@chakra-ui/react";
import { TopNavBar } from "../components/Common/Navigation/TopNavBar";
import { BottomNavBar } from "../components/Common/Navigation/BottomNavBar";

export const MyPage = () => {
  return (
    <div>
      <Box>
        <TopNavBar navType="back" />
      </Box>
      <div>마이페이지</div>
      <Box>
        <BottomNavBar navType="my" />
      </Box>
    </div>
  );
};
