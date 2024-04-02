import { Box, Flex, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  isNow: string;
}

export default function CommonNotice({ text, isNow }: Props) {
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
          <Text color={"white.100"}>{text}</Text>
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
        bgColor={"gray.500"}
      >
        <Flex>
          <Text color={"white.100"}>{text}</Text>
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
        borderColor={"black.100"}
        ml={"0.5rem"}
        bgColor={"blue.200"}
      >
        <Flex>
          <Text color={"white"}>{text}</Text>
        </Flex>
      </Box>
    </Flex>
  );
}
