import { Box, Flex } from "@chakra-ui/react";
import { InvestDetailContent } from "./InvestDetailContent";
import { InvestDetailTap } from "./InvestDetailTap";
import { useEffect, useState } from "react";

type State = {
  descActive: boolean;
  structureActive: boolean;
  expectRateActive: boolean;
  noticeActive: boolean;
  dangerActive: boolean;
  warningActive: boolean;
};

export const InvestDetailBox = () => {
  const [state, setState] = useState<State>({
    descActive: false,
    structureActive: false,
    expectRateActive: false,
    noticeActive: false,
    dangerActive: false,
    warningActive: false,
  });

  const handleTapClick = (key: keyof State) => {
    setState((prevState) => ({
      ...prevState,
      ...Object.fromEntries(Object.keys(prevState).map((k) => [k, k === key])),
    }));
  };

  useEffect(() => {
    handleTapClick("descActive");
  }, []);

  return (
    <Flex overflowX="auto">
      <Flex justifyContent={"space-around"} mt={"1rem"} minW={"550px"}>
        <InvestDetailTap
          text="작품 설명"
          active={state.descActive}
          onClick={() => handleTapClick("descActive")}
        />
        <InvestDetailTap
          text="투자 구조"
          active={state.structureActive}
          onClick={() => handleTapClick("structureActive")}
        />
        <InvestDetailTap
          text="예상 수익률"
          active={state.expectRateActive}
          onClick={() => handleTapClick("expectRateActive")}
        />
        <InvestDetailTap
          text="공지사항"
          active={state.noticeActive}
          onClick={() => handleTapClick("noticeActive")}
        />
        <InvestDetailTap
          text="투자 위험 안내"
          active={state.dangerActive}
          onClick={() => handleTapClick("dangerActive")}
        />
        <InvestDetailTap
          text="투자자 유의사항"
          active={state.warningActive}
          onClick={() => handleTapClick("warningActive")}
        />
      </Flex>
    </Flex>
  );
};
