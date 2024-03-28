import { useNavigate, useParams } from "react-router-dom";
import { BottomButtonNavbar } from "../components/Common/Navigation/BottomButtonNavbar";
import { InvestDetailBox } from "../components/Invest/Detail/InvestDetailBox";
import { InvestDetailHeader } from "../components/Invest/Detail/InvestDetailHeader";
import { InvestDetailHeaderInfo } from "../components/Invest/Detail/InvestDetailHeaderInfo";
import { useEffect, useState } from "react";
import { getFundding } from "../api/invest";
import { GetFundingResponse } from "../type/invest.interface";

export const InvestDetail = () => {
  const navigate = useNavigate();

  const handleInvest = () => {
    if (category === "ing") {
      navigate(`/invest-buy/${fundingId}`);
    }
  };

  //url의 fundingID 가져오고
  const { fundingId } = useParams();

  const [fundingData, setFundingData] = useState<GetFundingResponse>();

  //받아오는 애 (임시)
  //ing, endSuccess(마켓나오는 애), endFail, complete
  const [category, setCategory] = useState<string>("");

  //버튼에 들어가는 문자열
  const [text, setText] = useState<string>("");

  //진행률

  const artSum: number = 2000488;
  const percent: number = 10;

  //펀딩리스트 조회
  const getFundingData = async () => {
    try {
      const res = await getFundding({ fundingId: fundingId });
      if (res) {
        setFundingData(res);
        switch (res.progressStatus) {
          case "RECRUITMENT_STATUS":
            setCategory("ing");
            break;
          case "PENDING_SETTLEMENT":
            setCategory("endSuccess");
            break;
          case "RECRUITMENT_FAILED":
            setCategory("endFail");
            break;
          case "SETTLED":
            setCategory("complete");
            break;
          default:
            setCategory("");
            break;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (fundingData) {
      const progress = parseFloat(
        ((fundingData.nowCoinCount / fundingData.goalCoinCount) * 100).toFixed(
          1
        )
      );
      if (category === "ing") {
        setText("투자하기");
      } else {
        setText(
          `모집 종료 | ${fundingData?.nowCoinCount} 아트 (${progress}%) 모집`
        );
      }

      console.log(category);
    }
  }, [category, fundingData]);

  useEffect(() => {
    getFundingData();
  }, [fundingId]);

  return (
    <div>
      {fundingData && (
        <>
          <InvestDetailHeader fundingData={fundingData} />
          <InvestDetailHeaderInfo fundingData={fundingData} />
          <InvestDetailBox fundingData={fundingData} />

          <BottomButtonNavbar
            text={text}
            category={category}
            hanldeButton={handleInvest}
          />
        </>
      )}
    </div>
  );
};
