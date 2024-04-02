import { Box, Flex } from "@chakra-ui/react";
import { InvestDetailTap } from "./InvestDetailTap";
import { useEffect, useRef, useState } from "react";
import { DescriptionInvest } from "./TapContent/DescriptionInvest";
import { StructureInvest } from "./TapContent/StructureInvest";
import { ExpectRateInvest } from "./TapContent/ExpectRateInvest";
import { NoticeInvest } from "./TapContent/NoticeInvest";
import { DangerInvest } from "./TapContent/DangerInvest";
import { WarningInvest } from "./TapContent/WarningInvest";
import { GetFundingResponse } from "../../../type/invest.interface";

interface Props {
  fundingData: GetFundingResponse;
}

export interface menuType {
  id: number;
  name: string;
}

export const InvestDetailBox = ({ fundingData }: Props) => {
  const menu: menuType[] = [
    { id: 0, name: "작품 설명" },
    { id: 1, name: "투자 구조" },
    { id: 2, name: "예상 수익률" },
    { id: 3, name: "공지사항" },
    { id: 4, name: "투자 위험 안내" },
    { id: 5, name: "투자자 유의사항" },
  ];

  const [menuID, setMenuID] = useState(0);

  const descriptionRef = useRef<HTMLDivElement>(null);
  const structureRef = useRef<HTMLDivElement>(null);
  const expectRateRef = useRef<HTMLDivElement>(null);
  const noticeRef = useRef<HTMLDivElement>(null);
  const dangerRef = useRef<HTMLDivElement>(null);
  const warningRef = useRef<HTMLDivElement>(null);

  const scrollTarget = useRef<number | null>(null);
  const scrolling = useRef(false);

  const offset = 92;

  // 스크롤 이벤트 감지
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { capture: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // 해당 메뉴의 위치를 나타내는 DOM 요소에 대한 참조
    const refs: { [key: number]: React.RefObject<HTMLDivElement> } = {
      0: descriptionRef,
      1: structureRef,
      2: expectRateRef,
      3: noticeRef,
      4: dangerRef,
      5: warningRef,
    };

    const parentElement = document.getElementById("parent-scroll-element-id");

    if (!parentElement) return;

    const scrollTop = parentElement.scrollTop;
    const offsetTop = refs[menuID]?.current?.offsetTop || 0;

    if (scrollTop >= offsetTop) {
      setMenuID(menuID);
    }
  };

  useEffect(() => {
    const parentElement = document.getElementById("parent-scroll-element-id");
    if (!parentElement) return;
    parentElement.addEventListener("scroll", handleScroll);
    return () => {
      parentElement.removeEventListener("scroll", handleScroll);
    };
  }, [menuID]);

  return (
    <>
      <Flex
        overflowX="auto"
        position={"sticky"}
        backgroundColor={"white"}
        top={-1}
      >
        <Flex
          justifyContent={"space-around"}
          mt={"3"}
          minW={"550px"}
          borderBottom={"1px solid"}
          borderBottomColor={"gray.300"}
          h={"38"}
          backgroundColor={"white"}
        >
          <InvestDetailTap
            items={menu}
            activeID={menuID}
            setActiveID={setMenuID}
          />
        </Flex>
      </Flex>
      <div className="project-content">
        <DescriptionInvest
          poster={fundingData.descriptionImg}
          scheduleList={fundingData.scheduleList}
          ref={descriptionRef}
        />
        <StructureInvest
          saleList={fundingData.saleList}
          costList={fundingData.costList}
          totalBudget={fundingData.totalBudget}
          unitPrice={fundingData.unitPrice}
          bep={fundingData.bep}
          ref={structureRef}
        />
        <ExpectRateInvest
          ref={expectRateRef}
          expectedReturnList={fundingData.expectedReturnList}
        />
        <NoticeInvest ref={noticeRef} noticeList={fundingData.noticeList} />
        <DangerInvest ref={dangerRef} />
        <WarningInvest ref={warningRef} />
      </div>
    </>
  );
};
