import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { InvestListItem } from "../components/Invest/InvestList/InvestListItem";
import TopNav from "../components/Invest/InvestList/TopNav";
import TopSecondNav from "../components/Invest/InvestList/TopSecondNav";
import { getFunddingList } from "../api/invest";
import { GetFunddingListResponse } from "../type/invest.interface";
import { useEffect, useState } from "react";

export const InvestList = () => {
  const isDesktop = useMediaQuery({ minWidth: 501 });

  //받아오는 펀딩 리스트 배열
  const [fundArr, setFundArr] = useState<GetFunddingListResponse[]>();
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
    getFunddingList({
      category: category,
      status: status,
      allowStat: "TRUE",
      page: 0,
      size: 10,
    })
      .then((res) => {
        // console.log(res);
        if (Array.isArray(res)) {
          setMessage("");
          setFundArr(res);
        } else {
          setMessage(res);
        }
      })
      .catch((err) => console.log(err));
  };

  //처음 실행시 조회리스트 다 들고 와!
  useEffect(() => {
    funddingList();
  }, []);

  useEffect(() => {
    funddingList();
  }, [category, status]);

  //조회 목록 바뀌 때
  useEffect(() => {
    console.log(fundArr);
  }, [fundArr]);

  //카테고리 바뀔 때
  useEffect(() => {
    // console.log(category);
  }, [category]);

  useEffect(() => {
    console.log(message);
  }, [message]);

  return (
    <Box>
      <TopNav check={category} handleCheck={handleCategory} />
      <TopSecondNav check={status} handleCheck={handleStatus} />
      <SimpleGrid spacing={10} padding={7}>
        {message !== "" ? (
          <Center my={16} color={"gray.400"}>
            해당 필터의 작품이 없습니다.
          </Center>
        ) : (
          <>
            {fundArr?.map((item, index) => {
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
