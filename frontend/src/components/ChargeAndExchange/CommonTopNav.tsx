import { Flex, Text } from "@chakra-ui/react";

interface Props {
  text1: string;
  text2: string;
  onCheck: (whatCheck: string) => void;
  check: string;
}

export const CommonnTopNav = ({ text1, text2, onCheck, check }: Props) => {
  const handleClick = (whatCheck: string) => {
    onCheck(whatCheck);
  };

  return (
    <>
      {check === "one" ? (
        <Flex
          justifyContent={"space-between"}
          px={"20%"}
          py={5}
          backgroundColor={"white"}
        >
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"blue.400"}
            onClick={() => handleClick("one")}
            borderBottom={"2px"}
            backgroundColor={"white"}
          >
            {text1}
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            backgroundColor={"white"}
            onClick={() => handleClick("two")}
          >
            {text2}
          </Text>
        </Flex>
      ) : (
        <Flex
          justifyContent={"space-between"}
          backgroundColor={"white"}
          px={"20%"}
          py={5}
        >
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            backgroundColor={"white"}
            onClick={() => handleClick("one")}
          >
            {text1}
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            onClick={() => handleClick("two")}
            color={"blue.400"}
            borderBottom={"2px"}
            backgroundColor={"white"}
          >
            {text2}
          </Text>
        </Flex>
      )}
    </>
  );
};
