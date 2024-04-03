import { AspectRatio, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  img: string;
  text: string;
  id: number;
}

export default function Marketplace({ img, text, id }: Props) {
  const url = `/market/piece/${id}`;

  return (
    <>
      <Flex direction={"column"} w={"50%"} p={"0.5rem"} as={Link} to={url}>
        <AspectRatio ratio={1}>
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
      </Flex>
    </>
  );
}
