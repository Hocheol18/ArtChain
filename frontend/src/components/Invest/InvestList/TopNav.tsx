import { Box, Flex } from "@chakra-ui/layout";
import { useState } from "react";

export default function TopNav() {
  const [check, isCheck] = useState("Total");

  return (
    <>
      <Flex justifyContent={"center"} mt={"1rem"} wrap={"wrap"}>
        {check === "Total" ? (
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
            onClick={() => {
              isCheck("Total");
            }}
          >
            전체
          </Box>
        )}
        {check === "Arrow" ? (
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
              isCheck("Arrow");
            }}
          >
            공연
          </Box>
        )}
        {check === "Festival" ? (
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
              isCheck("Festival");
            }}
          >
            전시
          </Box>
        )}
        {check === "Movie" ? (
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
              isCheck("Movie");
            }}
          >
            영화
          </Box>
        )}
      </Flex>
    </>
  );
}
