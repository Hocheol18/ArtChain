import { Box, Image, Center } from "@chakra-ui/react";

interface Props {
  poster: string;
  title: string;
}

export const InvestContent = ({ poster, title }: Props) => {
  return (
    <Box
      display={"flex"}
      border={"1px solid"}
      mx={5}
      my={5}
      boxShadow={"lg"}
      borderRadius={"lg"}
      borderColor={"gray.200"}
    >
      <Image
        src={poster}
        objectFit="cover"
        height={140}
        w={200}
        px={5}
        py={4}
      />
      <Center fontSize={"18"} fontWeight={"bold"} pr={5}>
        {title}
      </Center>
    </Box>
  );
};
