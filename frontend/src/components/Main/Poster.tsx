import { AspectRatio, Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  src: string;
  text: string;
}

export default function Poster({ src, text }: Props) {
  return (
    <>
      <Center mt={"1rem"}>
        <AspectRatio w={"90%"} ratio={16 / 9}>
          <Image
            borderRadius={"1rem"}
            src={src}
            alt="naruto"
            objectFit="cover"
          />
        </AspectRatio>
      </Center>
      <Box mt={"0.8rem"}>
        <Center as={"b"} fontSize={"1.3rem"} textAlign={"center"}>
          {text}
        </Center>
      </Box>
    </>
  );
}
