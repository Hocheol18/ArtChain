import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export const MyTransactionTap = () => {
  const [check, checkFounder] = useState("total");

  return (
    <>
      <Flex
        justifyContent={"center"}
        alignContent={"center"}
        mt={"0.5rem"}
        wrap={"wrap"}
      >
        {check === "total" ? (
          <Box
            px={"0.6rem"}
            py={"0.1rem"}
            rounded={"0.7rem"}
            boxShadow={"md"}
            border={"1px"}
            borderColor={"gray.300"}
            paddingX={2}
            paddingY={1}
            mx={"0.5rem"}
          >
            <Text as={"b"} color={"black.100"}>
              전체
            </Text>
          </Box>
        ) : (
          <Box px={"0.6rem"} py={"0.1rem"}>
            <Text
              color={"gray.400"}
              onClick={() => {
                checkFounder("total");
              }}
            >
              전체
            </Text>
          </Box>
        )}
        {check === "invest" ? (
          <Box
            px={"0.6rem"}
            py={"0.1rem"}
            rounded={"0.7rem"}
            boxShadow={"md"}
            border={"1px"}
            borderColor={"gray.300"}
            paddingX={2}
            paddingY={1}
          >
            <Text as={"b"} color={"black.100"}>
              투자
            </Text>
          </Box>
        ) : (
          <Box px={"0.6rem"} py={"0.1rem"}>
            <Text color={"gray.400"} onClick={() => checkFounder("invest")}>
              투자
            </Text>
          </Box>
        )}

        {check === "market" ? (
          <Box
            px={"0.6rem"}
            py={"0.1rem"}
            rounded={"0.7rem"}
            boxShadow={"md"}
            border={"1px"}
            borderColor={"gray.300"}
            paddingX={2}
            paddingY={1}
          >
            <Text as={"b"} color={"black.100"}>
              거래
            </Text>
          </Box>
        ) : (
          <Box px={"0.6rem"} py={"0.1rem"}>
            <Text color={"gray.400"} onClick={() => checkFounder("market")}>
              거래
            </Text>
          </Box>
        )}

        {check === "sell" ? (
          <Box
            px={"0.6rem"}
            py={"0.1rem"}
            rounded={"0.7rem"}
            boxShadow={"md"}
            border={"1px"}
            borderColor={"gray.300"}
            paddingX={2}
            paddingY={1}
          >
            <Text as={"b"} color={"black.100"}>
              판매중
            </Text>
          </Box>
        ) : (
          <Box px={"0.6rem"} py={"0.1rem"}>
            <Text color={"gray.400"} onClick={() => checkFounder("sell")}>
              판매중
            </Text>
          </Box>
        )}
      </Flex>
    </>
  );
};
