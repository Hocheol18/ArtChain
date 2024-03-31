import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

interface arrType {
  name: string;
  check: string;
}

interface Props {
  tapArr: arrType[];
  handleCheck: (whatcheck: string) => void;
  check: string;
}

export const PieceCommonTap = ({ tapArr, handleCheck, check }: Props) => {
  return (
    <>
      <Flex
        justifyContent={"center"}
        alignContent={"center"}
        mt={"0.5rem"}
        wrap={"wrap"}
      >
        {tapArr.map((item) => (
          <>
            {check === item.check ? (
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
                  {item.name}
                </Text>
              </Box>
            ) : (
              <Box px={"0.6rem"} py={"0.1rem"}>
                <Text
                  color={"gray.400"}
                  onClick={() => {
                    handleCheck(item.check);
                  }}
                >
                  {item.name}
                </Text>
              </Box>
            )}
          </>
        ))}
      </Flex>
    </>
  );
};
