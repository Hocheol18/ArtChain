import { Box, Center, Flex, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import MarketIcon from "../../../assets/market-icon.svg";
import { Link, useParams } from "react-router-dom";

interface Props {
  text: string;
  category: string;
  hanldeButton: () => void;
}

export const BottomButtonNavbar = ({ text, category, hanldeButton }: Props) => {
  const isDesktop = useMediaQuery({ minWidth: 701 });

  const { fundingId } = useParams();

  const [color, setColor] = useState("blue.300");

  useEffect(() => {
    switch (category) {
      case "endSuccess":
        setColor("gray.500");
        break;
      case "endFail":
        setColor("gray.500");
        break;
      case "complete":
        setColor("gray.400");
        break;
      case "goingOn":
        setColor("blue.300");
        break;
    }
  }, [category]);

  return (
    <Box
      position={"fixed"}
      bottom={0}
      width={isDesktop ? "390px" : "100%"}
      backgroundColor={"white"}
      zIndex={1}
    >
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
          backgroundColor={color}
          onClick={hanldeButton}
        >
          <Text color={"white.100"}>{text}</Text>
        </Center>
        {category === "endSuccess" ? (
          <Center
            display={"flex"}
            flexDirection={"column"}
            ml={2}
            px={3}
            border={"1px solid"}
            borderColor={"gray.200"}
            borderRadius={"lg"}
            as={Link}
            to={`/market/${fundingId}`}
          >
            <Image src={MarketIcon} w={"20px"} />
            <Center fontSize={"15px"}>구입</Center>
          </Center>
        ) : null}
      </Flex>
    </Box>
  );
};
