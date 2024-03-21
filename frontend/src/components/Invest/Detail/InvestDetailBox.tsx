import { Box, Flex } from "@chakra-ui/react";
import { InvestDetailTap } from "./InvestDetailTap";
import { useEffect, useState } from "react";
import { DescriptionInvest } from "./TapContent/DescriptionInvest";
import { StructureInvest } from "./TapContent/StructureInvest";
import { ExpectRateInvest } from "./TapContent/ExpectRateInvest";
import { NoticeInvest } from "./TapContent/NoticeInvest";
import { DangerInvest } from "./TapContent/DangerInvest";
import { WarningInvest } from "./TapContent/WarningInvest";

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
    descActive: true,
    structureActive: false,
    expectRateActive: false,
    noticeActive: false,
    dangerActive: false,
    warningActive: false,
  });

  const [showComponent, setShowComponent] = useState<JSX.Element>(
    <DescriptionInvest />
  );

  // 탭 클릭하면 해당 Active만 true, 나머지 다 false로
  const handleTapClick = (key: keyof State) => {
    setState((prevState) => ({
      ...prevState,
      ...Object.fromEntries(Object.keys(prevState).map((k) => [k, k === key])),
    }));

    switch (key) {
      case "descActive":
        setShowComponent(<DescriptionInvest />);
        break;
      case "structureActive":
        setShowComponent(<StructureInvest />);
        break;
      case "expectRateActive":
        setShowComponent(<ExpectRateInvest />);
        break;
      case "noticeActive":
        setShowComponent(<NoticeInvest />);
        break;
      case "dangerActive":
        setShowComponent(<DangerInvest />);
        break;
      case "warningActive":
        setShowComponent(<WarningInvest />);
        break;
    }
  };

  return (
    <>
      <Flex overflowX="auto">
        <Flex
          justifyContent={"space-around"}
          mt={"1rem"}
          minW={"550px"}
          borderBottom={"1px solid"}
          borderBottomColor={"gray.300"}
        >
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
      {showComponent}
    </>
  );
};
