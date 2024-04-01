import MainCarousel from "../components/Main/MainCarousel";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Poster from "../components/Main/Poster";
import Marketplace from "../components/Main/Marketplace";
import justin from "../assets/poster.png";
import uni from "../assets/universe.png";
import { useNavigate } from "react-router-dom";
import {
  getMyPieceDropDown,
  getMyPieceList,
  getMyInvestmentHistory,
  getMyPieceCount,
} from "../api/mypage";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <MainCarousel />
      <Box mt={"1rem"}>
        <Text as={"b"} ml={"1.5rem"} fontSize={"2rem"}>
          진행 중인 투자 작품
        </Text>
      </Box>
      <Poster />
      <Poster />
      <Box
        px={"1rem"}
        py={"0.7rem"}
        rounded={"0.7rem"}
        mt={"1.5rem"}
        fontSize={"sm"}
        bgColor={"blue.100"}
        ml={"0.5rem"}
        mr={"0.5rem"}>
        <Center
          color={"blue.400"}
          as="b"
          fontSize={"1.1rem"}
          onClick={() => {
            navigate("../invest-list");
          }}>
          더 많은 작품 투자하러 가기
        </Center>
      </Box>
      <Box mt={"1rem"}>
        <Text as={"b"} ml={"1.5rem"} fontSize={"2rem"}>
          마켓
        </Text>
      </Box>

      <Center p={"1rem"}>
        <Flex wrap={"wrap"} justifyContent={"flex-start"} w={"390px"}>
          <Marketplace img={justin} text="2024 딜라이트 서울" />
          <Marketplace img={uni} text="모네에서 앤디워홀까지:부산전" />
          <Marketplace img={justin} text="ㅗㅑ" />
          <Marketplace img={uni} text="ㅗㅑ" />
        </Flex>
      </Center>

      <Box
        px={"1rem"}
        py={"0.7rem"}
        rounded={"0.7rem"}
        fontSize={"sm"}
        bgColor={"blue.100"}
        ml={"0.5rem"}
        mr={"0.5rem"}
        mb={"4rem"}>
        <Center
          color={"blue.400"}
          as="b"
          fontSize={"1.1rem"}
          onClick={() => {
            navigate("../market");
          }}>
          마켓 보러 가기
        </Center>
      </Box>
    </>
  );
}
