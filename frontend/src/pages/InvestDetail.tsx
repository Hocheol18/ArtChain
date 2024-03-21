import { useNavigate } from "react-router-dom";
import { BottomButtonNavbar } from "../components/Common/Navigation/BottomButtonNavbar";
import { InvestDetailBox } from "../components/Invest/Detail/InvestDetailBox";
import { InvestDetailHeader } from "../components/Invest/Detail/InvestDetailHeader";
import { InvestDetailHeaderInfo } from "../components/Invest/Detail/InvestDetailHeaderInfo";

export const InvestDetail = () => {
  const navigate = useNavigate();

  const handleInvest = () => {
    navigate("/invest-buy");
  };

  return (
    <div>
      <InvestDetailHeader />
      <InvestDetailHeaderInfo />
      <InvestDetailBox />

      <BottomButtonNavbar text="투자하기" hanldeButton={handleInvest} />
    </div>
  );
};
