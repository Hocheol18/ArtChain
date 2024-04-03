import { AspectRatio, Box, Center, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FundingMainPage } from "../../type/invest.interface";
import { Link } from "react-router-dom";

interface Props {
  mainFunding: FundingMainPage;
}

export default function Poster({ mainFunding }: Props) {
  const url = `/invest/${mainFunding.id}`;

  useEffect(() => {
    console.log(mainFunding);
  }, []);

  return (
    <Box my={7} as={Link} to={url}>
      <Box
        mx={"auto"}
        mt={"1rem"}
        position={"relative"}
        w={"80%"}
        boxShadow={"lg"}
      >
        <AspectRatio ratio={16 / 9}>
          <Image
            borderRadius={"1rem"}
            src={mainFunding.poster}
            alt="naruto"
            objectFit="cover"
          />
        </AspectRatio>
        <Box
          position={"absolute"}
          backgroundColor={"blue.300"}
          textColor={"white"}
          fontWeight={"bold"}
          px={"4%"}
          py={"3%"}
          top={1.5}
          left={1.5}
          borderRadius={"0.5rem"}
          fontSize={"14px"}
        >
          {mainFunding.percentage}%
        </Box>
        <Box
          position={"absolute"}
          bottom={0}
          w={"100%"}
          borderBottomLeftRadius={"1rem"}
          borderBottomRightRadius={"1rem"}
          backgroundColor={"gray.500"}
          h={"30%"}
          bg="rgba(74, 80, 86, 0.8)"
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          textColor={"white"}
        >
          <Box>현재 구매된 조각</Box>
          <Box>100,100 조각</Box>
        </Box>
      </Box>
      <Box mt={"0.8rem"} w={"80%"} mx={"auto"}>
        <Center as={"b"} fontSize={"1.3rem"} textAlign={"center"}>
          {mainFunding.fundingTitle}
        </Center>
      </Box>
    </Box>
  );
}
