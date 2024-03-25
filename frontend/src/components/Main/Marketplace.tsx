import { AspectRatio, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  img: string;
  text: string;
}

export default function Marketplace({ img, text }: Props) {
  return (
    <>
      <Box w={"50%"} p={"0.5rem"}>
        <AspectRatio w={"100%"} ratio={1 / 1}>
          <Image
            borderRadius={"1rem"}
            src={img}
            alt="naruto"
            objectFit="cover"
          />
        </AspectRatio>
        <Box mt={"0.5rem"} fontSize={"1rem"} w={"100%"}>
          <Text as={"b"}>{text}</Text>
        </Box>
      </Box>
    </>
  );
}
