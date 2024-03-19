import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function TopSecondNav() {
  const [check, checkFounder] = useState("total");

  return (
    <>
      <Flex minW={"360px"} justifyContent={"center"} mt={"0.5rem"}>
        {check === "total" ? (
          <Box
            px={"0.6rem"}
            py={"0.1rem"}
            rounded={"0.7rem"}
            boxShadow={"xl"}
            fontSize={"xs"}
            border={"1px"}
            borderColor={"gray.300"}
            ml={"0.5rem"}
          >
            <Text as={"b"} color={"black.100"}>
              전체
            </Text>
          </Box>
        ) : (
          <Box
            px={"0.6rem"}
            py={"0.1rem"}
            rounded={"0.7rem"}
            boxShadow={"xl"}
            fontSize={"xs"}
            border={"1px"}
            borderColor={"gray.300"}
            ml={"0.5rem"}
          >
            <Text as={"b"} color={"gray.400"} onClick={() => {checkFounder("total")}}>
              전체
            </Text>
          </Box>
        )}
        {check === 'past' ? <Box
          px={"0.6rem"}
          py={"0.1rem"}
          rounded={"0.7rem"}
          boxShadow={"xl"}
          fontSize={"xs"}
          border={"1px"}
          borderColor={"gray.300"}
          ml={"0.5rem"}
        >
          <Text as={"b"} color={"black.100"}>
            정산이전
          </Text>
        </Box> : <Box
          px={"0.6rem"}
          py={"0.1rem"}
          rounded={"0.7rem"}
          boxShadow={"xl"}
          fontSize={"xs"}
          border={"1px"}
          borderColor={"gray.300"}
          ml={"0.5rem"}
        >
          <Text as={"b"} color={"gray.400"} onClick={() => checkFounder('past')}>
            정산이전
          </Text>
        </Box>}
        
        {check === 'confirm' ? <Box
          px={"0.6rem"}
          py={"0.1rem"}
          rounded={"0.7rem"}
          boxShadow={"xl"}
          fontSize={"xs"}
          border={"1px"}
          borderColor={"gray.300"}
          ml={"0.5rem"}
        >
          <Text as={"b"} color={"black.100"}>
            정산완료
          </Text>
        </Box> : <Box
          px={"0.6rem"}
          py={"0.1rem"}
          rounded={"0.7rem"}
          boxShadow={"xl"}
          fontSize={"xs"}
          border={"1px"}
          borderColor={"gray.300"}
          ml={"0.5rem"}
        >
          <Text as={"b"} color={"gray.400"} onClick={() => checkFounder("confirm")}>
            정산완료
          </Text>
        </Box>}
        
      </Flex>
    </>
  );
}
