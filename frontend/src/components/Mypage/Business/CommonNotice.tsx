import { Box, Flex, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  color: string;
}

export default function CommonNotice({ text, color }: Props) {
  return (
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
        bgColor={color}
      >
        <Flex>
          <Text color={"white.100"}>{text}</Text>
        </Flex>
      </Box>
    </Flex>
  );
}
