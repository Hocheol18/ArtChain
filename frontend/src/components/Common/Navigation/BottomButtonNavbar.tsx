import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  Props: string;
}

export const BottomButtonNavbar = ({ Props }: Props) => {
  return (
    <div>
      <Flex height="70" borderTop={"1px"} borderTopColor="#EFF0F3" p={"0.5rem"}>
        <Center
          flex={1}
          px={"0.6rem"}
          py={"0.1rem"}
          rounded={"0.7rem"}
          fontSize={"lg"}
          bg={"blue.300"}
        >
          <Text as={"b"} color={"white.100"}>
            {Props}
          </Text>
        </Center>
      </Flex>
    </div>
  );
};
