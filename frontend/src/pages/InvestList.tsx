import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { InvestListItem } from "../components/Invest/InvestList/InvestListItem";
import TopNav from "../components/Invest/InvestList/TopNav";
import TopSecondNav from "../components/Invest/InvestList/TopSecondNav";
import { getFunddingList } from "../api/invest";
import {
  FunddingList,
  GetFunddingListResponse,
} from "../type/invest.interface";
import { useEffect, useState } from "react";

export const InvestList = () => {
  const isDesktop = useMediaQuery({ minWidth: 501 });

  //받아오는 펀딩 리스트 배열
  const [fundArr, setFundArr] = useState<GetFunddingListResponse>();
  const [message, setMessage] = useState<string>("");

  //카테고리
  const [category, setCategory] = useState("ALL");
  const handleCategory = (whatCategory: string) => {
    setCategory(whatCategory);
  };

  //진행상황
  const [status, setStatus] = useState("ALL");
  const handleStatus = (whatStatus: string) => {
    setStatus(whatStatus);
  };

  //펀딩리스트 조회
  const funddingList = async () => {
    try {
      const res = await getFunddingList({
        category: category,
        status: status,
        allowStat: "TRUE",
        page: 0,
        size: 10,
      });

      if (typeof res === "string") {
        setMessage(res); // 문자열일 경우 메시지로 설정
        setFundArr(undefined); // 펀딩 리스트 초기화
      } else {
        setMessage(""); // 문자열이 아닌 경우 메시지 초기화
        setFundArr(res); // 펀딩 리스트 설정
      }
    } catch (error) {
      console.error("Error fetching fundding list:", error);
    }
  };

  //처음 실행시 조회리스트 다 들고 와!
  useEffect(() => {
    funddingList();
  }, []);

  useEffect(() => {
    funddingList();
  }, [category, status]);

  return (
    <Box>
      <TopNav check={category} handleCheck={handleCategory} />
      <TopSecondNav
        check={status}
        handleCheck={handleStatus}
        totalNum={fundArr ? fundArr.totalCount : 0}
      />
      <SimpleGrid spacing={10} padding={7}>
        {message !== "" ? (
          <Center my={16} color={"gray.400"}>
            해당 필터의 작품이 없습니다.
          </Center>
        ) : (
          <>
            {fundArr?.fundingList?.map((item, index) => {
              return (
                <Box key={index}>
                  <InvestListItem
                    id={item.id}
                    entId={item.entId}
                    name={item.name}
                    poster={item.poster}
                    goalCoinCount={item.goalCoinCount}
                    nowCoinCount={item.nowCoinCount}
                    contractAddress={item.contractAddress}
                    category={item.category}
                    recruitEnd={item.recruitEnd}
                    recruitStart={item.recruitStart}
                    settlement={item.settlement}
                    progressStatus={item.progressStatus}
                    investorNum={item.investorNum}
                    finalReturnRate={item.finalReturnRate}
                  />
                </Box>
              );
            })}
          </>
        )}
      </SimpleGrid>
    </Box>
  );
};
