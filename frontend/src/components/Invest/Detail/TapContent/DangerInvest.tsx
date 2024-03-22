import { Box } from "@chakra-ui/react";
import { DangerInvestItem } from "./DangerInvestItem";

export const DangerInvest = () => {
  const dangerList = [
    {
      img: "Icon1",
      title: "원금손실위험",
      text: "투자자는 투자원금액의 전부 또는 일부에 대한 손실 위험이 있으며, 투자자의 투자원금액 손실은 전적으로 투자자가 부담합니다.",
    },
    {
      img: "Icon2",
      title: "유명인, 주요인물(개인) 신뢰도 하락위험",
      text: "관련 주요인물의 개인적 신뢰 및 비도덕적 문제로 인한 이미지 타격 및 인지도가 급격하게 하락할 수 있습니다.",
    },
    {
      img: "Icon3",
      title: "시장위험",
      text: "예상치 못한 정치/경제 상황/정부의 조치 및 세제의 변경으로 영향을 미칠 수 있습니다.",
    },
    {
      img: "Icon4",
      title: "신용위험",
      text: "발행회사나 거래 상대방의 영업 환경, 재무상황 및 신용상태의 악화, 신용등급 하락, 채무불이행, 부도발생 등에 따른 환매연기로 읺나 손실이 발생할 수 있습니다.",
    },
    {
      img: "Icon5",
      title: "그 외 위험 사항",
      text: "투자상품설명서 내 투자위험 참고",
    },
  ];

  return (
    <Box mb={"70px"} pb={3}>
      <Box fontSize={"22"} fontWeight={"bold"} pl={6} mt={5} pb={2}>
        투자 위험 안내
      </Box>
      <Box fontSize={"14"} px={6} textColor={"gray.500"} pb={3}>
        핵심위험들에 대한 상세 내용은 투자 상품 설명서를 참고해 주시기 바랍니다.
      </Box>
      <Box px={6} justifyContent={"center"}>
        {dangerList.map((key) => (
          <Box mb={3}>
            <DangerInvestItem img={key.img} title={key.title} text={key.text} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
