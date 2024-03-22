import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

interface Props {
  text: string;
  hanldeButton: () => void;
}

export const BottomButtonNavbar = ({ text, hanldeButton }: Props) => {
  const isDesktop = useMediaQuery({ minWidth: 701 });
  return (
    <Box position={"fixed"} bottom={0} width={isDesktop ? "390px" : "100%"}>
      <Flex
        height="70"
        borderTop={"1px"}
        borderTopColor="#EFF0F3"
        p={"0.5rem"}
        backgroundColor={"white"}
      >
        <Center
          flex={1}
          px={"0.6rem"}
          py={"0.1rem"}
          rounded={"5"}
          fontSize={"lg"}
          bg={"blue.300"}
          onClick={hanldeButton}
        >
          <Text as={"b"} color={"white.100"}>
            {text}
          </Text>
        </Center>
      </Flex>
    </Box>
  );
};
