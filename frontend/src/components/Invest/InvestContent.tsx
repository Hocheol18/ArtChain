import { Box, Image, Center } from "@chakra-ui/react";
import tmpImg from "../../assets/invest-poster-tmp-img.jpg";

export const InvestContent = () => {
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
        src={tmpImg}
        objectFit="cover"
        height={120}
        w={200}
        px={5}
        py={4}
      />
      <Center fontSize={"18"} fontWeight={"bold"} pr={5}>
        스튜디오 지브리 애니메이션 거장 타카하타 이사오 전시
      </Center>
    </Box>
  );
};
