import { Box, Button, Text, Image, Flex, Center } from "@chakra-ui/react";

import { useNavigate, Link } from "react-router-dom";
import DoughnutChart from "../components/Mypage/DoughnutChart";
import { MyPiece } from "./MyPiece";

export default function UserMyPage() {
  const num = 100;
  const navigate = useNavigate();
  const handleCharge = () => {
    navigate("/charge");
  };

  const handleExchange = () => {
    navigate("/exchange");
  };

  //임시
  const data = [
    {
      title: "Hello Kitty 전시회와 뮤지컬",
      percent: 40,
    },
    {
      title: "씬",
      percent: 35,
    },
    {
      title: "디어 에반 헨스",
      percent: 20,
    },
    {
      title: "그 외",
      percent: 5,
    },
  ];

  const colorArr = ["blue.400", "blue.300", "blue.200", "gray.300"];

  return (
    <>
      <Flex direction={"column"} backgroundColor={"gray.100"} pb={6}>
        <Box fontSize={20} fontWeight={"bold"} mx={5} mt={5} mb={3}>
          현재 투자 중인 작품
        </Box>
        <Flex alignItems={"center"}>
          <Flex justifyContent={"center"} boxSize={"35%"} mx={6}>
            <DoughnutChart data={data} />
          </Flex>
          <Flex direction={"column"} mr={6} ml={2}>
            {data.map((item, index) => (
              <>
                <Flex alignItems={"center"} py={1}>
                  <Box
                    w={"20px"}
                    h={"20px"}
                    borderRadius={"5px"}
                    bgColor={colorArr[index]}
                  />
                  <Text ml={"0.5rem"} fontSize={15}>
                    {item.title}
                  </Text>
                </Flex>
              </>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <MyPiece type="invest" />
    </>
  );
}
