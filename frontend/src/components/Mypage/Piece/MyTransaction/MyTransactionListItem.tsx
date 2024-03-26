import { Image, Center } from "@chakra-ui/react";
import TmpImg from "../../../../assets/invest-poster-tmp-img.jpg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const MyTransactionListItem = () => {
  const { userId } = useParams();

  //작품 아이디
  const id = 12;
  return (
    <>
      <Center
        display={"flex"}
        flexDirection={"column"}
        maxW={160}
        py={5}
        px={2}
        as={Link}
        to={`/mypiece/${userId}/transaction/${id}`}
      >
        <Image src={TmpImg} h={100} w={70} objectFit={"cover"} />
        <Center mt={5} fontWeight={"bold"} textAlign={"center"}>
          Fall Out Boy : 2024 Seoul Concertsdfds fsdfdsfsdf ewosiejfidf
        </Center>
      </Center>
    </>
  );
};
