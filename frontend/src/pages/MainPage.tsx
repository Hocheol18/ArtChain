import React from "react";
import { Box } from "@chakra-ui/react";
import { TopNavBar } from "../components/Common/Navigation/TopNavBar";

export const MainPage = () => {
  return (
    <div>
      <Box>
        <TopNavBar navType="logo" />
      </Box>
      <div>메인페이지</div>
    </div>
  );
};
