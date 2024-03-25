import { useNavigate } from "react-router-dom";
import { BottomButtonNavbar } from "../components/Common/Navigation/BottomButtonNavbar";
import { InvestDetailBox } from "../components/Invest/Detail/InvestDetailBox";
import { InvestDetailHeader } from "../components/Invest/Detail/InvestDetailHeader";
import { InvestDetailHeaderInfo } from "../components/Invest/Detail/InvestDetailHeaderInfo";
import { useEffect, useState } from "react";

export const InvestDetail = () => {
  const navigate = useNavigate();

  const handleInvest = () => {
    if (category === "ing") {
      navigate("/invest-buy");
    }
  };

  //받아오는 애 (임시)
  //ing, endSuccess(마켓나오는 애), endFail, complete
  const [category, setCategory] = useState<string>("ing");

  //버튼에 들어가는 문자열
  const [text, setText] = useState<string>("");

  const artSum: number = 2000488;
  const percent: number = 10;

  useEffect(() => {
    if (category === "ing") {
      setText("투자하기");
    } else {
      setText(`모집 종료 | ${artSum} 아트 (${percent}%) 모집`);
    }
  }, [category]);

  return (
    <div>
      <InvestDetailHeader />
      <InvestDetailHeaderInfo />
      <InvestDetailBox />

      <BottomButtonNavbar
        text={text}
        category={category}
        hanldeButton={handleInvest}
      />
    </div>
  );
};
