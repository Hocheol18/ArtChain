import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { BottomButtonNavbar } from "../../Common/Navigation/BottomButtonNavbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { handleMintTokens } from "../../../MintTokenComponent";
import { PostCharge } from "../../../api/coin";
import useUserInfo, { userInfoType } from "../../../store/useUserInfo";

export const ArtCharge = () => {
  const [account, setAccount] = useState<string>("");
  //코인 가져오기
  const { userInfo, setUserInfo } = useUserInfo();

  useEffect(() => {
    if ((window as any).ethereum) {
      (window as any).ethereum
        .request({ method: "eth_accounts" })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        });
    }
  }, []);

  //코인 충전 axios
  const coinCharge = async (
    coinAmount: number,
    transactionHash: string,
    inoutFlag: string,
    currencyFlow: number
  ) => {
    await PostCharge({
      coinAmount: coinAmount,
      transactionHash: transactionHash,
      inoutFlag: inoutFlag,
      currencyFlow: currencyFlow,
    });
  };

  //충전 인덱스
  const [value, setValue] = useState<string>("");

  // 충전하기 버튼 클릭 핸들러
  const handleCharge = async () => {
    if (!window.IMP) return;
    const { IMP } = window;
    IMP.init("imp53764281");

    // 선택된 아이템 찾기
    const selectedItem = artCoinArr.find((item) => item.art === value);
    // 선택된 아이템의 money 값을 숫자로 변환
    const price = selectedItem
      ? parseInt(selectedItem.money.replace(/,/g, ""), 10)
      : 0;

    //코인 업데이트
    const updateUserBalance = (prevUserInfo: userInfoType): userInfoType => {
      // 이전 상태(prevUserInfo)를 기반으로 새로운 상태를 반환합니다.
      return {
        ...prevUserInfo, // 이전 상태의 모든 속성을 유지합니다.
        walletBalance: (
          parseInt(prevUserInfo.walletBalance) + price
        ).toString(), // 지갑 잔액을 업데이트합니다.
      };
    };

    IMP.request_pay(
      {
        pg: "kakaopay.TC0ONETIME",
        pay_method: "card", // 생략가
        merchant_uid: `ORD${crypto.randomUUID()}`, // 상점에서 생성한 고유 주문번호
        name: "Artchain 아트 구매",
        amount: price,
        buyer_email: "4pjttest@gmail.com",
        buyer_name: "구매자이름",
        m_redirect_url: "http://j10a708.p.ssafy.io:3000/charge",
      },
      async function (rsp) {
        // callback

        if (rsp.success === true) {
          // 결제 성공
          alert("결제 성공~!!!");

          // 1. 컨트랙트 실행해야함
          handleMintTokens({
            tokenAmount: price / 1000,
            account: account, // 여기에 사용자의 이더리움 주소를 추가하세요.
            onMintSuccess: (transactionHash) => {
              alert(`민트 성공, 트랜잭션 해시: ${transactionHash}`);
              // 여기에 성공시의 로직을 추가하세요.
              coinCharge(price / 1000, transactionHash, "충전", price);

              console.log(updateUserBalance(userInfo));
              setUserInfo(updateUserBalance(userInfo));
            },
            onMintError: (error) => {
              alert(`민트 실패 : ${error}`);
              // 여기에 에러 처리 로직을 추가하세요.
            },
          });
        } else {
          //결제 실패
          alert(`결제 실패, 에러 내용 : ${rsp.error_msg}`);
        }
      }
    );
  };

  //데이터

  const artCoinArr = [
    {
      art: "10",
      money: "10,000",
    },
    {
      art: "50",
      money: "50,000",
    },
    {
      art: "100",
      money: "100,000",
    },
    {
      art: "500",
      money: "500,000",
    },
    {
      art: "1,000",
      money: "1,000,000",
    },
    {
      art: "5,000",
      money: "5,000,000",
    },
  ];

  return (
    <Box mb={70}>
      <Box px={8} pb={2} fontWeight={"bold"} fontSize={"14"}>
        충전하실 아트를 선택하세요
      </Box>
      <Center>
        <RadioGroup value={value} onChange={setValue}>
          <Stack direction="column">
            <Grid templateRows="reapeat(8, 1fr)" gap={3}>
              <Flex
                w={"85vw"}
                ml={8}
                borderTop={"1px solid"}
                borderBottom={"1px solid"}
                borderTopColor={"gray.200"}
                borderBottomColor={"gray.200"}
                px={4}
                py={2}
              >
                <Center w={"50%"} fontWeight={"bold"}>
                  아트
                </Center>
                <Center w={"50%"} fontWeight={"bold"}>
                  결제 금액
                </Center>
              </Flex>
              {artCoinArr.map((item) => (
                <GridItem
                  w={"100%"}
                  borderRadius={"3xl"}
                  backgroundColor={value === item.art ? "blue.100" : "white"}
                >
                  <Radio px={4} py={3} value={item.art}>
                    <Flex w={"85vw"}>
                      <Center fontWeight={"bold"} w={"50%"}>
                        {item.art} 코인
                      </Center>
                      <Center fontWeight={"bold"} w={"50%"}>
                        {item.money} 원
                      </Center>
                    </Flex>
                  </Radio>
                </GridItem>
              ))}
            </Grid>
          </Stack>
        </RadioGroup>
      </Center>
      <BottomButtonNavbar
        text="충전하기"
        category=""
        hanldeButton={handleCharge}
      />
    </Box>
  );
};
