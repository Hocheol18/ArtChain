import { Box, Flex, Text } from "@chakra-ui/react";

interface Props {
  first : string;
  second : string;
  thrid : string;
  isNow: string;
}

export default function CommonNotice({ first, second, thrid, isNow }: Props) {
  return isNow === "now" ? (
    <Flex>
      <Box
        mr={"0.3rem"}
        px={"0.6rem"}
        py={"0.3rem"}
        rounded={"0.7rem"}
        boxShadow={"xl"}
        fontSize={"xs"}
        border={"1px"}
        borderColor={"gray.300"}
        ml={"0.5rem"}
        bgColor={"blue.300"}
      >
        <Flex>
          <Text color={"white.100"}>
            {first}
          </Text>
        </Flex>
      </Box>
    </Flex>
  ) : isNow === "wait" ? (
    <Flex>
      <Box
        mr={"0.3rem"}
        px={"0.6rem"}
        py={"0.3rem"}
        rounded={"0.7rem"}
        boxShadow={"xl"}
        fontSize={"xs"}
        border={"1px"}
        borderColor={"gray.300"}
        ml={"0.5rem"}
        bgColor={"red"}
      >
        <Flex>
          <Text color={"white.100"}>
            {second}
          </Text>
        </Flex>
      </Box>
    </Flex>
  ) : (
    <Flex>
      <Box
        mr={"0.3rem"}
        px={"0.6rem"}
        py={"0.3rem"}
        rounded={"0.7rem"}
        boxShadow={"xl"}
        fontSize={"xs"}
        border={"1px"}
        borderColor={"black.100"}
        ml={"0.5rem"}
        bgColor={"gray.300"}
      >
        <Flex>
          <Text color={"black"}>
            {thrid}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
