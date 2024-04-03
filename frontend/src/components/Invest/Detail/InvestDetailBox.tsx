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
    { id: 4, name: "투자자 유의사항" },
    { id: 5, name: "투자 위험 안내" },
  ];

  const [menuID, setMenuID] = useState<number>(0);

  const descriptionRef = useRef<HTMLDivElement>(null);
  const structureRef = useRef<HTMLDivElement>(null);
  const expectRateRef = useRef<HTMLDivElement>(null);
  const noticeRef = useRef<HTMLDivElement>(null);
  const warningRef = useRef<HTMLDivElement>(null);
  const dangerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY; // 현재 스크롤 위치

    if (
      !descriptionRef.current ||
      !structureRef.current ||
      !expectRateRef.current ||
      !noticeRef.current ||
      !dangerRef.current ||
      !warningRef.current
    ) {
      return;
    }

    // 각 섹션의 상단 위치 계산
    const descriptionPos = descriptionRef.current.offsetTop - 60 || 0;
    const structurePos = structureRef.current.offsetTop - 60 || 0;
    const expectRatePos = expectRateRef.current.offsetTop - 60 || 0;
    const noticePos = noticeRef.current.offsetTop - 60 || 0;
    const warningPos = warningRef.current.offsetTop - 60 || 0;
    const dangerPos = dangerRef.current.offsetTop - 60 || 0;

    if (currentScrollPos >= descriptionPos && currentScrollPos < structurePos) {
      setMenuID(0);
    } else if (
      currentScrollPos >= structurePos &&
      currentScrollPos < expectRatePos
    ) {
      setMenuID(1);
    } else if (
      currentScrollPos >= expectRatePos &&
      currentScrollPos < noticePos
    ) {
      setMenuID(2);
    } else if (currentScrollPos >= noticePos && currentScrollPos < warningPos) {
      setMenuID(3);
    } else if (currentScrollPos >= warningPos && currentScrollPos < dangerPos) {
      setMenuID(4);
    } else if (currentScrollPos >= dangerPos) {
      setMenuID(5);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionRef) => {
    console.log(sectionRef.current);
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop; // 섹션의 상단 위치
      const offsetPosition = sectionTop - 60; // 원하는 위치까지의 거리 조정 (예: 50px 위로)
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Flex
        overflowX="auto"
        position={"sticky"}
        backgroundColor={"white"}
        top={49}
        zIndex={2}
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
            setActiveID={(id) => {
              // 메뉴 아이디에 따라 해당 섹션으로 이동
              switch (id) {
                case 0:
                  console.log(id);
                  scrollToSection(descriptionRef);
                  break;
                case 1:
                  console.log(id);
                  scrollToSection(structureRef);
                  break;
                case 2:
                  scrollToSection(expectRateRef);
                  break;
                case 3:
                  scrollToSection(noticeRef);
                  break;
                case 4:
                  scrollToSection(warningRef);
                  break;
                case 5:
                  scrollToSection(dangerRef);
                  break;
                default:
                  console.log(id);
                  break;
              }
            }}
          />
        </Flex>
      </Flex>
      <Flex direction={"column"} gap={5} backgroundColor={"gray.300"}>
        <div ref={descriptionRef}>
          <DescriptionInvest data={fundingData} />
        </div>
        <div ref={structureRef}>
          <StructureInvest data={fundingData} />
        </div>
        <div ref={expectRateRef}>
          <ExpectRateInvest data={fundingData} />
        </div>
        <div ref={noticeRef}>
          <NoticeInvest data={fundingData} />
        </div>
        <div ref={warningRef}>
          <WarningInvest />
        </div>
        <div ref={dangerRef}>
          <DangerInvest />
        </div>
      </Flex>
    </>
  );
};
