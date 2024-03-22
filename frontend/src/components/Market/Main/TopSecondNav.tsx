import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  first: string;
  second: string;
  third: string;
  forth: string;
  isCheck: boolean;
}

export default function TopSecondNav({
  first,
  second,
  third,
  forth,
  isCheck,
}: Props) {
  const [check, checkFounder] = useState("total");

  return (
    <>
      {isCheck ? (
        <Flex justifyContent={"center"} mt={"0.5rem"} mr={"0.5rem"}>
          {check === "total" ? (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text as={"b"} color={"black.100"}>
                {first}
              </Text>
            </Box>
          ) : (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text
                as={"b"}
                color={"gray.400"}
                onClick={() => {
                  checkFounder("total");
                }}
              >
                {first}
              </Text>
            </Box>
          )}
          {check === "past" ? (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text as={"b"} color={"black.100"}>
                {second}
              </Text>
            </Box>
          ) : (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text
                as={"b"}
                color={"gray.400"}
                onClick={() => checkFounder("past")}
              >
                {second}
              </Text>
            </Box>
          )}

          {check === "confirm" ? (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text as={"b"} color={"black.100"}>
                {third}
              </Text>
            </Box>
          ) : (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text
                as={"b"}
                color={"gray.400"}
                onClick={() => checkFounder("confirm")}
              >
                {third}
              </Text>
            </Box>
          )}
        </Flex>
      ) : (
        <Flex justifyContent={"center"} mr={"0.5rem"}>
          {check === "total" ? (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text as={"b"} color={"black.100"}>
                {first}
              </Text>
            </Box>
          ) : (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text
                as={"b"}
                color={"gray.400"}
                onClick={() => {
                  checkFounder("total");
                }}
              >
                {first}
              </Text>
            </Box>
          )}
          {check === "past" ? (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text as={"b"} color={"black.100"}>
                {second}
              </Text>
            </Box>
          ) : (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text
                as={"b"}
                color={"gray.400"}
                onClick={() => checkFounder("past")}
              >
                {second}
              </Text>
            </Box>
          )}

          {check === "confirm" ? (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text as={"b"} color={"black.100"}>
                {third}
              </Text>
            </Box>
          ) : (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text
                as={"b"}
                color={"gray.400"}
                onClick={() => checkFounder("confirm")}
              >
                {third}
              </Text>
            </Box>
          )}
          {check === "fundconfirm" ? (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text as={"b"} color={"black.100"}>
                {forth}
              </Text>
            </Box>
          ) : (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text
                as={"b"}
                color={"gray.400"}
                onClick={() => checkFounder("fundconfirm")}
              >
                {forth}
              </Text>
            </Box>
          )}
        </Flex>
      )}
    </>
  );
}
