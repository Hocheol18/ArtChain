import { Box, Input, Center, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { BottomButtonNavbar } from "../components/Common/Navigation/BottomButtonNavbar";
import { InvestContent } from "../components/Invest/InvestContent";
import { InvestArt } from "../components/Invest/InvestArt";
import useUserInfo from "../store/useUserInfo";
import { getFundding } from "../api/invest";
import { useParams } from "react-router-dom";
import { GetFundingResponse } from "../type/invest.interface";

export const Invest = () => {
  //투자하기 누르면 실행될 함수
  const handleInvest = () => {};

  //url에서 fundingId 가져오고
  const { fundingId } = useParams();

  //fundingData 설정
  const [fundingData, setFundingData] = useState<GetFundingResponse>();

  const { userInfo } = useUserInfo();

  const artNum = Number(userInfo.walletBalance);

  //조각구매갯수
  const [value, setValue] = useState<number>(0);

  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue > artNum) {
      setValue(artNum);
    } else {
      setValue(newValue);
    }
  };

  //투자 포스터와 제목을 가져오기 위해 투자 상세보기 axios 연결
  const getFundingData = async () => {
    const res = await getFundding({ fundingId: fundingId });
    setFundingData(res);
  };

  useEffect(() => {
    getFundingData();
  }, []);

  return (
    <>
      {fundingData && (
        <Box>
          <InvestContent
            poster={fundingData?.poster}
            title={fundingData.name}
          />
          <InvestArt artNum={artNum} value={value} />
          <Center my={10} textColor={""} fontSize={"25"} fontWeight={"bold"}>
            몇조각을 구매할까요?
          </Center>

          <Box
            px={7}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Input
              w={250}
              value={value}
              onChange={handleSetValue}
              type="number"
              placeholder="구매할 조각을 입력해주세요"
              variant="unstyled"
              inputMode="numeric"
              fontSize={"20"}
              textAlign={"right"}
              max={artNum} // 최대값 설정
              sx={{
                "::placeholder": {
                  textAlign: "right",
                  textColor: "#9FA0A2",
                },
              }}
            />

            <Box w={16} ml={5} fontSize={"25"} fontWeight={"bold"}>
              조각
            </Box>
          </Box>

          <BottomButtonNavbar
            text="구매하기"
            category=""
            hanldeButton={handleInvest}
          />
        </Box>
      )}
    </>
  );
};
