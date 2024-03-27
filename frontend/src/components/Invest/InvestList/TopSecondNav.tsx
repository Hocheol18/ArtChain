import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function TopSecondNav() {
  const [check, checkFounder] = useState("ALL");

  return (
    <>
      <Flex
        justifyContent={"center"}
        alignContent={"center"}
        mt={"0.5rem"}
        wrap={"wrap"}
      >
        {check === "ALL" ? (
          <Box
            px={"0.6rem"}
            py={"0.1rem"}
            rounded={"0.7rem"}
            boxShadow={"md"}
            border={"1px"}
            borderColor={"gray.300"}
            ml={"0.5rem"}
            paddingX={2}
            paddingY={1}
          >
            <Text as={"b"} color={"black.100"}>
              전체 10
            </Text>
          </Box>
        ) : (
          <Box px={"0.6rem"} py={"0.1rem"} ml={"0.5rem"}>
            <Text
              color={"gray.400"}
              onClick={() => {
                checkFounder("ALL");
              }}
            >
              전체
            </Text>
          </Box>
        )}
        {check === "RECRUITMENT_STATUS" ? (
          <Box
            px={"0.6rem"}
            py={"0.1rem"}
            rounded={"0.7rem"}
            boxShadow={"md"}
            border={"1px"}
            borderColor={"gray.300"}
            ml={"0.5rem"}
            paddingX={2}
            paddingY={1}
          >
            <Text as={"b"} color={"black.100"}>
              진행중 10
            </Text>
          </Box>
        ) : (
          <Box px={"0.6rem"} py={"0.1rem"} ml={"0.5rem"}>
            <Text
              color={"gray.400"}
              onClick={() => checkFounder("RECRUITMENT_STATUS")}
            >
              진행중
            </Text>
          </Box>
        )}

        {check === "RECRUITMENT_END" ? (
          <Box
            px={"0.6rem"}
            py={"0.1rem"}
            rounded={"0.7rem"}
            boxShadow={"md"}
            border={"1px"}
            borderColor={"gray.300"}
            ml={"0.5rem"}
            paddingX={2}
            paddingY={1}
          >
            <Text as={"b"} color={"black.100"}>
              모집종료 100
            </Text>
          </Box>
        ) : (
          <Box px={"0.6rem"} py={"0.1rem"} ml={"0.5rem"}>
            <Text
              color={"gray.400"}
              onClick={() => checkFounder("RECRUITMENT_END")}
            >
              모집종료
            </Text>
          </Box>
        )}

        {check === "SETTLED" ? (
          <Box
            px={"0.6rem"}
            py={"0.1rem"}
            rounded={"0.7rem"}
            boxShadow={"md"}
            border={"1px"}
            borderColor={"gray.300"}
            ml={"0.5rem"}
            paddingX={2}
            paddingY={1}
          >
            <Text as={"b"} color={"black.100"}>
              정산완료 100
            </Text>
          </Box>
        ) : (
          <Box px={"0.6rem"} py={"0.1rem"} ml={"0.5rem"}>
            <Text color={"gray.400"} onClick={() => checkFounder("SETTLED")}>
              정산완료
            </Text>
          </Box>
        )}
      </Flex>
    </>
  );
}
