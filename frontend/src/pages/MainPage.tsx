import React from "react";
import MainCarousel from "../components/Main/MainCarousel";
import { Box, Text } from "@chakra-ui/react";

export default function MainPage() {
  return (
    <>
      <MainCarousel />

      <Box mt={"0.5rem"}>
        <Text as={"b"} ml={"1rem"}>
          진행 중인 투자 작품
        </Text>
      </Box>

    </>)
};
