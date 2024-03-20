import { InvestDetailBox } from "../components/Invest/Detail/InvestDetailBox";
import { InvestDetailHeader } from "../components/Invest/Detail/InvestDetailHeader";
import { InvestDetailHeaderInfo } from "../components/Invest/Detail/InvestDetailHeaderInfo";

export const InvestDetail = () => {
  return (
    <div>
      <InvestDetailHeader />
      <InvestDetailHeaderInfo />
      <InvestDetailBox />
    </div>
  );
};
