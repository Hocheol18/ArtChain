import React from "react";
import { Flex, Center, Text } from "@chakra-ui/layout";
import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";

export const useCustomToast = () => {
  const toast = useToast();

  const toastFunction = (contents: string, isState: boolean) => {
    {
      isState
        ? toast({
            duration: 2000,
            isClosable: true,
            position: "top",
            render: () => (
              <Flex
                color="white"
                mt={"50px"}
                bg="blue.300"
                p={"1rem"}
                borderRadius={"0.7rem"}
                alignItems={"center"}
              >
                <CheckCircleIcon boxSize={5} color={"white"} ml={"0.5rem"} />
                <Center ml={"1rem"}>
                  <Text as={"b"}>{contents}</Text>
                </Center>
              </Flex>
            ),
          })
        : toast({
            duration: 2000,
            isClosable: true,
            position: "top",
            render: () => (
              <Flex
                color="white"
                mt={"50px"}
                bg="#C70000"
                p={"1rem"}
                borderRadius={"0.7rem"}
                alignItems={"center"}
              >
                <WarningTwoIcon boxSize={5} color={"white"} ml={"0.5rem"} />
                <Center ml={"1rem"}>
                  <Text as={"b"}>{contents}</Text>
                </Center>
              </Flex>
            ),
          });
    }
  };

  return toastFunction;
};
