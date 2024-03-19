import React from "react";
import { Box } from "@chakra-ui/react";
import { TopNavBar } from "../components/Common/Navigation/TopNavBar";
import { BottomNavBar } from "../components/Common/Navigation/BottomNavBar";
import { useMediaQuery } from "react-responsive";

export const MainPage = () => {
  const isDesktop = useMediaQuery({ minWidth: 501 });

  return <div>메인페이지</div>;
};
