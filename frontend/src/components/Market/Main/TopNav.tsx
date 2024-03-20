import { Box, Flex } from "@chakra-ui/layout";
import { useState } from "react";

export default function Martet() {
    const [check, isCheck] = useState("Total")

  return (
    <>
      <Flex minW={"360px"} justifyContent={"center"} mt={"1rem"} ml={"1rem"}>
        {check === 'Total' ? (
          <Box borderBottom={"2px"} color={"blue.300"} mr={"0.7rem"}>
            전체
          </Box>
        ) : (
          <Box mr={"0.7rem"} color={"gray.400"} onClick={() => {isCheck("Total")}}>
            전체
          </Box>
        )}
        {check === 'Arrow' ? (
          <Box borderBottom={"2px"} color={"blue.300"} mr={"0.7rem"}>
            공연
          </Box>
        ) : (
          <Box mr={"0.7rem"} color={"gray.400"} onClick={() => {isCheck("Arrow")}}>
            공연
          </Box>
        )}
        {check === 'Festival' ? (
          <Box borderBottom={"2px"} color={"blue.300"} mr={"0.7rem"}>
            전시
          </Box>
        ) : (
          <Box mr={"0.7rem"} color={"gray.400"} onClick={() => {isCheck("Festival")}}>
            전시
          </Box>
        )}
        {check === 'Movie' ? (
          <Box borderBottom={"2px"} color={"blue.300"} mr={"0.7rem"}>
            영화
          </Box>
        ) : (
          <Box mr={"0.7rem"} color={"gray.400"} onClick={() => {isCheck("Movie")}}>
            영화
          </Box>
        )}
      </Flex>
    </>
  );
}
