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

export const ArtCharge = () => {
  const [account, setAccount] = useState<string>("");

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
          handleMintTokens(
            price / 1000,
            account, // 여기에 사용자의 이더리움 주소를 추가하세요.
            (transactionHash) => {
              alert(`민트 성공, 트랜잭션 해시: ${transactionHash}`);
              // 여기에 성공시의 로직을 추가하세요.
            },
            (error) => {
              alert(`민트 실패 : ${error}`);
              // 여기에 에러 처리 로직을 추가하세요.
            }
          );

          // 2. DB로 axios 날리기
        } else {
          //결제 실패
          alert(`결제 실패, 에러 내용 : ${rsp.error_msg}`);
        }

        // if (rsp.success != "false") {
        // 결제 성공시
        // alert("결제 완료!");
        // 1. 컨트랙트 실행해야함
        // handleMintTokens(
        //   price / 1000,
        //   account, // 여기에 사용자의 이더리움 주소를 추가하세요.
        //   (transactionHash) => {
        //     alert(`민트 성공, 트랜잭션 해시: ${transactionHash}`);
        //     // 여기에 성공시의 로직을 추가하세요.
        //   },
        //   (error) => {
        //     alert(`민트 실패 : ${error}`);
        //     // 여기에 에러 처리 로직을 추가하세요.
        //   }
        // );
        // 2. axios 날려서 db에 저장해야함
        // if (rsp.status) {
        // DB저장 성공시
        // window.location.reload();
        // } else {
        // 결제완료 후 DB저장 실패시
        // alert(
        //   `error:[${rsp.status}]\n결제요청이 승인된 경우 관리자에게 문의바랍니다.`
        // );
        // DB저장 실패시 status에 따라 추가적인 작업 가능성
      }
      // } else if (rsp.success == false) {
      //   // 결제 실패시
      //   alert(rsp.error_msg);
      // }
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
