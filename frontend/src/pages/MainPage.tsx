import MainCarousel from "../components/Main/MainCarousel";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Poster from "../components/Main/Poster";
import Marketplace from "../components/Main/Marketplace";
import justin from "../assets/poster.png";
import uni from "../assets/universe.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MainCarouselFundingList, MainPageFundingList } from "../api/invest";
import { FundingCarousel, FundingMainPage } from "../type/invest.interface";
import { getMainPageMarketTop4 } from "../api/market";
import { MainPageMarketTop4ResponseInterface } from "../type/market.interface";

export default function MainPage() {
  const navigate = useNavigate();

  //캐러셀리스트
  const [carouselList, setCarouselList] = useState<FundingCarousel[]>();

  //메인펀딩 리스트
  const [mainFundingList, setMainFundingList] = useState<FundingMainPage[]>();

  const [marketFundingList, setMarketFundingList] =
    useState<MainPageMarketTop4ResponseInterface[]>();

  //캐러셀 작품 리스트 가져오기
  const getCarouselList = async () => {
    const res = await MainCarouselFundingList();

    setCarouselList(res.fundingCarouselList);
  };

  //메인페이지 작품 리스트 가져오기
  const getMainFundingList = async () => {
    const res = await MainPageFundingList();

    setMainFundingList(res.fundingMainPageList);
  };

  const getMarketFundingList = async () => {
    const res = await getMainPageMarketTop4();

    setMarketFundingList(res);
  };

  useEffect(() => {
    getCarouselList();
    getMainFundingList();
    getMarketFundingList();
  }, []);

  return (
    <>
      {carouselList && carouselList?.length >= 1 ? (
        <MainCarousel carouselList={carouselList} />
      ) : null}
      <Flex mx={6} position="relative" mt={5}>
        <Text mx={2} fontWeight={"bold"} fontSize={"28"} zIndex={1}>
          모집 마감 예정 작품
        </Text>
        <Box
          position="absolute"
          bottom="0px"
          width="226px"
          height="15px"
          bg="blue.100"
          boxShadow={"lg"}
          zIndex={0}
        />
      </Flex>

      {mainFundingList &&
        mainFundingList.length >= 1 &&
        mainFundingList.map((item) => <Poster mainFunding={item} />)}
      {!mainFundingList ||
        (mainFundingList?.length < 1 && (
          <Center fontSize={"20"} py={10}>
            {" "}
            모집 마감 예정 작품이 없습니다.
          </Center>
        ))}

      <Box
        px={"1rem"}
        py={"0.7rem"}
        rounded={"0.7rem"}
        mt={"1.5rem"}
        fontSize={"sm"}
        bgColor={"blue.100"}
        ml={"0.5rem"}
        mr={"0.5rem"}
        boxShadow={"md"}
      >
        <Center
          color={"blue.400"}
          as="b"
          fontSize={"1.1rem"}
          onClick={() => {
            navigate("../invest-list");
          }}
        >
          더 많은 작품 투자하러 가기
        </Center>
      </Box>

      <Flex mx={6} position="relative" mt={"3rem"}>
        <Text mx={2} fontWeight={"bold"} fontSize={"28"} zIndex={1}>
          마켓 인기 Top 4
        </Text>
        <Box
          position="absolute"
          bottom="0px"
          width="196px"
          height="15px"
          bg="blue.100"
          boxShadow={"lg"}
          zIndex={0}
        />
      </Flex>

      <Center p={"1rem"}>
        <Flex wrap={"wrap"} justifyContent={"flex-start"}>
          {marketFundingList &&
            marketFundingList?.map((item) => (
              <Marketplace
                img={item.fundingPoster}
                text={item.fundingName}
                id={item.fundingId}
              />
            ))}
          {!marketFundingList ||
            (marketFundingList?.length < 1 && (
              <Center fontSize={"20"} py={10}>
                {" "}
                마켓 인기 작품이 없습니다.
              </Center>
            ))}
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
        mb={"2rem"}
        boxShadow={"md"}
      >
        <Center
          color={"blue.400"}
          as="b"
          fontSize={"1.1rem"}
          onClick={() => {
            navigate("/market/1");
          }}
        >
          마켓 보러 가기
        </Center>
      </Box>
    </>
  );
}
