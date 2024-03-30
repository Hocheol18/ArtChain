import {
  Box,
  Input,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { BottomButtonNavbar } from "../components/Common/Navigation/BottomButtonNavbar";
import { InvestContent } from "../components/Invest/InvestContent";
import { InvestArt } from "../components/Invest/InvestArt";
import useUserInfo from "../store/useUserInfo";
import { PostInvest, getFundding } from "../api/invest";
import { useNavigate, useParams } from "react-router-dom";
import { GetFundingResponse } from "../type/invest.interface";
import { FundRaisingPage } from "../FundRaising";

import Spinner from "../assets/spinner.gif";
import { CheckCircleIcon } from "@chakra-ui/icons";
import PuzzleIcon from "../assets/puzzle.svg";

export const Invest = () => {
  const navigate = useNavigate();

  //투자하기 누르면 실행될 함수
  const handleInvest = async () => {
    //0이 아니고 숫자라면
    if (!isNaN(value) && value !== 0) {
      setIsSuccess(false);
      onOpen();
      try {
        //transactionHash
        const transactionHash = await FundRaisingPage({
          // account: "0x9630b4B3d0593C02A91836b4B985f1802757eBF4",
          account: userInfo.metamask,
          tokenAmount: value.toString(),
        });
        if (transactionHash) {
          //트랜잭션 성공 시간
          const transactionTime = new Date().toISOString().slice(0, -5);
          //date 받아오고

          setUrl(`https://sepolia.etherscan.io/tx/${transactionHash}`);

          // 여기 axios 날릴 곳
          handlePostInvest(transactionTime, transactionHash);

          //성공하면 띄워짐
          setIsSuccess(true);
        } else {
          onClose();
          alert("조각 구매 중 에러가 발생하였습니다. 다시 시도해주세요.");
        }
      } catch (err) {
        //트랜잭션 에러
        onClose();
        alert("조각 구매 중 에러가 발생하였습니다. 다시 시도해주세요.");
      }
    } else {
      // 여기 커스텀 에러
      alert("조각 개수를 입력해주세요");
    }
  };

  //투자하기 post axios
  const handlePostInvest = async (
    transactionTime: string,
    transactionHash: string
  ) => {
    try {
      const res = await PostInvest({
        fundingId: fundingId,
        fundingRequest: {
          transactionHash: transactionHash,
          transactiontime: transactionTime,
          coinCount: value,
          pieceCount: value,
        },
      });

      console.log(res);
    } catch {}
  };

  //url에서 fundingId 가져오고
  const { fundingId } = useParams();

  //fundingData 설정
  const [fundingData, setFundingData] = useState<GetFundingResponse>();

  const { userInfo } = useUserInfo();

  const artNum = Number(userInfo.walletBalance);

  //조각구매갯수
  const [value, setValue] = useState<number>(0);

  //transactionHash (거래 성공 후 보낼 거)
  const [transactionHashCode, setTransactionHashCode] = useState<string>();

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

  //처음 시작할 때 작품 이름/포스터 들고와야 함
  useEffect(() => {
    console.log();
    getFundingData();
  }, []);

  //모달을 위한
  const { isOpen, onOpen, onClose } = useDisclosure();

  //성공여부에 따라 모달 내용 바뀜
  const [isSuccess, setIsSuccess] = useState<boolean>();

  //상세보기 url
  const [url, setUrl] = useState<string>("");

  const handleGoHome = () => {
    onClose();
    // 유저아이디 넣기
    navigate(`/mypiece/1`);
  };

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

          {/* 모달 */}
          <Modal
            closeOnOverlayClick={false}
            isOpen={isOpen}
            onClose={onClose}
            isCentered={true}
          >
            <ModalOverlay />
            <ModalContent bg={"white"} w="60%">
              {isSuccess ? (
                <>
                  <ModalBody pb={6}>
                    <Center display={"flex"} flexDirection={"column"}>
                      <Center py={5} fontWeight={"bold"} fontSize={"20"}>
                        <CheckCircleIcon mr={3} color={"blue.300"} />
                        투자 완료
                      </Center>

                      <Center mb={7} mt={5} flexDir={"column"}>
                        <Center pb={3} fontSize={"18"} fontWeight={"bold"}>
                          <Image
                            filter={
                              "invert(19%) sepia(100%) saturate(1891%) hue-rotate(201deg) brightness(90%) contrast(99%)"
                            }
                            ml={1}
                            w={6}
                            src={PuzzleIcon}
                          />
                          {value} 조각
                        </Center>
                        <Link
                          href={url}
                          textColor={"blue.300"}
                          onClick={handleGoHome}
                        >
                          거래 상세 링크
                        </Link>
                      </Center>

                      <Center my={3}>
                        <Button
                          variant="unstyled"
                          px={3}
                          backgroundColor="blue.300"
                          color={"white"}
                          onClick={handleGoHome}
                        >
                          확인
                        </Button>
                      </Center>
                    </Center>
                  </ModalBody>
                </>
              ) : (
                <>
                  {/* <ModalHeader>조각을 만드는 중입니다...</ModalHeader> */}

                  <ModalBody pb={6}>
                    <Center display={"flex"} flexDirection={"column"}>
                      <Box py={5} fontWeight={"bold"}>
                        조각을 만드는 중입니다...
                      </Box>
                      <Image src={Spinner} />
                    </Center>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>

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
