import TopNav from "../components/Market/Main/TopNav";
import Content from "../components/Market/Main/Content";
import TopSecondNav from "../components/Market/Main/TopSecondNav";
import MarketSell from "../components/Market/Main/MarketSell";

export default function Martet() {
  return (
    <>
      <TopNav />
      <TopSecondNav first="전체" second="정산이전" third="정산완료" forth="" isCheck={true} />
      <MarketSell />
      <Content />
    </>
  );
}
