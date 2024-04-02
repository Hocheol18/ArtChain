import { AspectRatio, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { BottomButtonNavbar } from "../Common/Navigation/BottomButtonNavbar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PutFundingAllow, getFundding } from "../../api/invest";
import { useCustomToast } from "../Common/Toast";
import { GetFundingResponse } from "../../type/invest.interface";
import { formatNumberWithComma } from "../Common/Comma";

export default function ProjectConfirm() {
  const id = useParams() as { id: string };
  const navigate = useNavigate();
  const toastFunction = useCustomToast();
  const [values, setValues] = useState<GetFundingResponse>();
  useEffect(() => {
    getFundding({ fundingId: id.id })
      .then((res) => {
        setValues(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const success = () => {
    toastFunction("승인 성공", true);
    navigate(-1);
  };

  const ProjectConfirm = (allowStatus: boolean) => {
    PutFundingAllow({
      fundingId: Number(id.id),
      allowStatus: allowStatus,
    }).then(() => {
      success();
    });
  };

  return (
    <>
      <Flex direction={"column"} p={"1.5rem"} mb={"3rem"} gap={3}>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Text as={"b"} fontSize={"1.5rem"}>
              프로젝트 등록
            </Text>
          </Box>
          <Button
            mt={"0.1rem"}
            width={"50px"}
            h={"35px"}
            bgColor={"blue.300"}
            textColor={"white"}
            fontSize={"sm"}
            _hover={{ bg: "blue.400" }} // 마우스 오버 시 색상
            _active={{ bg: "blue.500", borderColor: "blue.500" }} // 클릭 시 색상
            _focus={{ boxShadow: "none" }} // 클릭 후 포커스 상태 제거
            onClick={() => {
              ProjectConfirm(false);
            }}
          >
            반려
          </Button>
        </Flex>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            프로젝트 이름
          </Text>
          <Text mt={"0.5rem"} fontSize={"1rem"}>
            {values?.name}
          </Text>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            포스터
          </Text>

          <AspectRatio w="130px" ratio={1}>
            <Image src={values?.poster} />
          </AspectRatio>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"} w={"100%"}>
          <Text as={"b"} fontSize={"1rem"}>
            카테고리
          </Text>
          <Box mt={"0.5rem"}>
            {values?.category === "SHOW"
              ? "공연"
              : values?.category === "MOVIE"
              ? "영화"
              : "전시"}
          </Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            목표 금액
          </Text>
          <Box mt={"0.5rem"}>
            {formatNumberWithComma(Number(values?.goalCoinCount))}원
          </Box>
        </Box>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            모집시작일
          </Text>
          <Text mt={"0.5rem"} fontSize={"1rem"}>
            {values?.recruitStart}
          </Text>
        </Box>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            모집종료일
          </Text>
          <Text mt={"0.5rem"} fontSize={"1rem"}>
            {values?.recruitEnd}
          </Text>
        </Box>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            정산 완료일
          </Text>
          <Text mt={"0.5rem"} fontSize={"1rem"}>
            {values?.settlement}
          </Text>
        </Box>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            그 외 일정
          </Text>
        </Box>
        <Flex justifyContent={"space-between"}>
          <Box ml={"0.2rem"} mt={"0.5rem"} w={"100%"}>
            {values?.scheduleList.map((data, index) => (
              <Flex>
                <Text flex={1} key={index} fontSize={"1rem"}>
                  {data.scheduleDate}
                </Text>
                <Text flex={1} key={index} fontSize={"1rem"}>
                  {data.scheduleName}
                </Text>
              </Flex>
            ))}
          </Box>
        </Flex>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            프로젝트 설명 이미지
          </Text>

          <AspectRatio w="130px" ratio={1}>
            <Image src={values?.descriptionImg} />
          </AspectRatio>
        </Box>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            매출 구성
          </Text>
        </Box>
        <Flex justifyContent={"space-between"}>
          <Box ml={"0.2rem"} w={"100%"}>
            {values?.saleList.map((data, index) => (
              <Flex>
                <Text flex={1} key={index} fontSize={"1rem"}>
                  {data.mainVariety}
                </Text>
                <Text flex={1} key={index} fontSize={"1rem"}>
                  {data.subVariety}
                </Text>
                <Text flex={1} key={index} fontSize={"1rem"}>
                  {data.percentage}%
                </Text>
              </Flex>
            ))}
          </Box>
        </Flex>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            비용 구성
          </Text>
        </Box>
        <Flex justifyContent={"space-between"}>
          <Box ml={"0.2rem"} w={"100%"}>
            {values?.costList.map((data, index) => (
              <Flex>
                <Text flex={1} key={index} fontSize={"1rem"}>
                  {data.mainVariety}
                </Text>
                <Text flex={1} key={index} fontSize={"1rem"}>
                  {data.subVariety}
                </Text>
              </Flex>
            ))}
          </Box>
        </Flex>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            총 예산 규모
          </Text>
          <Box ml={"0.2rem"} mt={"0.5rem"}>
            <Text fontSize={"1rem"}>
              {formatNumberWithComma(Number(values?.totalBudget))}
            </Text>
          </Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            객단가
          </Text>
          <Box ml={"0.2rem"} mt={"0.5rem"}>
            <Text fontSize={"1rem"}>
              {formatNumberWithComma(Number(values?.unitPrice))}원
            </Text>
          </Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            추정 손익분기점
          </Text>
          <Box ml={"0.2rem"} mt={"0.5rem"}>
            <Text fontSize={"1rem"}>
              {formatNumberWithComma(Number(values?.bep))}
            </Text>
          </Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            예상 수익률
          </Text>
          <Flex justifyContent={"space-between"}>
            <Box ml={"0.2rem"} mt={"0.5rem"} w={"100%"}>
              {values?.expectedReturnList.map((data, index) => (
                <Flex>
                  <Text flex={1} key={index} fontSize={"1rem"}>
                    {data.spectatorNum} 명 이하
                  </Text>
                  <Text flex={1} key={index} fontSize={"1rem"}>
                    {data.expectedReturn}%
                  </Text>
                </Flex>
              ))}
            </Box>
          </Flex>
        </Box>
      </Flex>
      <BottomButtonNavbar
        text="컨펌"
        category=""
        hanldeButton={() => {
          ProjectConfirm(true);
        }}
      />
    </>
  );
}
