import { AspectRatio, Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import justin from "../../assets/poster.png";

export default function Poster() {
  return (
    <>
      <Center mt={"1rem"}>
        <AspectRatio w={"90%"} ratio={16 / 9}>
          <Image
            borderRadius={"1rem"}
            src={justin}
            alt="naruto"
            objectFit="cover"
          />
        </AspectRatio>
      </Center>
      <Box mt={"0.5rem"}>
        <Text fontSize={"1.1rem"} textAlign={"center"}>
          2024 delight Seoul (딜라이트 서울)
        </Text>
      </Box>
    </>
  );
}
