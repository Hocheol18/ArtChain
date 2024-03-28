import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { NoticeInvestItem } from "../components/Invest/Detail/TapContent/NoticeInvestItem";
import { useParams } from "react-router-dom";
import { getNotice } from "../api/invest";

export const InvestNoticeDetail = () => {
  const { fundingId, noticeId } = useParams();

  useEffect(() => {
    const noticeContent = async () => {
      getNotice({
        fundingId: fundingId,
        fundingNoticeId: noticeId,
      });
    };
  }, []);

  const content = `대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를 존중함을 기본으로 한다. 혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다.\n\n사법권은 법관으로 구성된 법원에 속한다. 헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다.\n\n국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며, 국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다. 모든 국민은 인간다운 생활을 할 권리를 가진다.\n\n모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을 박탈당하지 아니한다. 재의의 요구가 있을 때에는 국회는 재의에 붙이고, 재적의원과반수의 출석과 출석의원 3분의 2 이상의 찬성으로 전과 같은 의결을 하면 그 법률안은 법률로서 확정된다.`;
  return (
    <Box>
      <Box>
        <NoticeInvestItem />
      </Box>
      <Box py={5} px={6} fontSize={15}>
        {content}
      </Box>
    </Box>
  );
};
