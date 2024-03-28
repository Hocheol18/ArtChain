import { Box, Flex } from "@chakra-ui/layout";
import { useState } from "react";

interface Props {
  check: string;
  handleCheck: (whatCheck: string) => void;
}

export default function TopNav({ check, handleCheck }: Props) {
  const handleClick = (whatCheck: string) => {
    handleCheck(whatCheck);
  };

  return (
    <>
      <Flex justifyContent={"center"} mt={"1rem"} wrap={"wrap"}>
        {check === "ALL" ? (
          <Box
            borderBottom={"2px"}
            color={"blue.300"}
            mr={"0.7rem"}
            fontWeight={"bold"}
          >
            전체
          </Box>
        ) : (
          <Box
            mr={"0.7rem"}
            color={"gray.400"}
            onClick={() => handleClick("ALL")}
          >
            전체
          </Box>
        )}
        {check === "SHOW" ? (
          <Box
            borderBottom={"2px"}
            color={"blue.300"}
            mr={"0.7rem"}
            fontWeight={"bold"}
          >
            공연
          </Box>
        ) : (
          <Box
            mr={"0.7rem"}
            color={"gray.400"}
            onClick={() => {
              handleClick("SHOW");
            }}
          >
            공연
          </Box>
        )}
        {check === "EXHIBITION" ? (
          <Box
            borderBottom={"2px"}
            color={"blue.300"}
            mr={"0.7rem"}
            fontWeight={"bold"}
          >
            전시
          </Box>
        ) : (
          <Box
            mr={"0.7rem"}
            color={"gray.400"}
            onClick={() => {
              handleClick("EXHIBITION");
            }}
          >
            전시
          </Box>
        )}
        {check === "MOVIE" ? (
          <Box
            borderBottom={"2px"}
            color={"blue.300"}
            mr={"0.7rem"}
            fontWeight={"bold"}
          >
            영화
          </Box>
        ) : (
          <Box
            mr={"0.7rem"}
            color={"gray.400"}
            onClick={() => {
              handleClick("MOVIE");
            }}
          >
            영화
          </Box>
        )}
      </Flex>
    </>
  );
}
