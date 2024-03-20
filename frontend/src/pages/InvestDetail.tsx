import { InvestDetailContent } from "../components/Invest/Detail/InvestDetailContent";
import { InvestDetailHeader } from "../components/Invest/Detail/InvestDetailHeader";
import { InvestDetailHeaderInfo } from "../components/Invest/Detail/InvestDetailHeaderInfo";
import { InvestDetailTap } from "../components/Invest/Detail/InvestDetailTap";

export const InvestDetail = () => {
  return (
    <div>
      <InvestDetailHeader />
      <InvestDetailHeaderInfo />
      <InvestDetailTap />
      <InvestDetailContent />
    </div>
  );
};
