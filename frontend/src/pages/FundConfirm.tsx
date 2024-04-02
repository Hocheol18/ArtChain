import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { BottomButtonNavbar } from "../components/Common/Navigation/BottomButtonNavbar";
import FileUploadButton from "../components/Mypage/Business/FileUploadButton";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFundding } from "../api/invest";
import { PostSettlement } from "../api/Settlement";
import { useCustomToast } from "../components/Common/Toast";

export default function FundConfirm() {
  const { id } = useParams();

  const toastFunction = useCustomToast();

  const [name, setName] = useState<string>();
  const [enterName, setEnterName] = useState<string>();

  const getFundingData = async () => {
    const res = await getFundding({ fundingId: id });

    setName(res.name);
    setEnterName(res.entName);
  };

  const [settlementPrice, setSettlementPrice] = useState<number>();
  const [returnRate, setReturnRate] = useState<number>();
  const [depositDate, setDepositDate] = useState<string>("");

  //정산 자료
  const [dataFile, setDataFile] = useState<File>();
  const handleDataFile = (file: File) => {
    setDataFile(file);
  };

  useEffect(() => {
    getFundingData();
  }, []);

  const handleSubmit = async () => {
    try {
      const applyData = {
        fundingId: id,
        settlementPricee: settlementPrice,
        returnRate: returnRate,
        depositDate: depositDate,
      };

      const formData = new FormData();
      if (dataFile) {
        formData.append("file", dataFile);
      }

      // 먼저 dto를 formData에 추가해야 합니다.
      const json = JSON.stringify(applyData);
      const blob = new Blob([json], { type: "application/json" });
      formData.append("dto", blob);

      // 수정된 formData를 PostSettlement 함수에 전달
      const responseData = await PostSettlement(formData);
      toastFunction("정산 신청이 완료되었습니다", true);
    } catch {
      toastFunction("정산 신청에 실패했습니다. 다시 시도해주세요.", false);
    }
  };

  return (
    <>
      <Box p={"1.5rem"}>
        <Box>
          <Text as={"b"} fontSize={"1.5rem"}>
            {enterName}
          </Text>
        </Box>
        <Box mt={"0.5rem"}>
          <Text as={"b"} fontSize={"2.2rem"}>
            {name}
          </Text>
        </Box>
        <Flex justifyContent={"space-between"} mt={"3rem"}>
          <Text as={"b"} fontSize={"1.5rem"} flex={1}>
            정산 금액
          </Text>
          <Input
            flex={1}
            placeholder={"정산할 금액 입력(원)"}
            border={"1px"}
            borderColor={"gray.400"}
            size="md"
            type="number"
            value={settlementPrice}
            onChange={(e) => setSettlementPrice(e.target.value)}
          />
        </Flex>
        <Flex justifyContent={"space-between"} mt={"3rem"}>
          <Text as={"b"} fontSize={"1.5rem"} flex={1}>
            최종 수익률
          </Text>
          <Input
            flex={1}
            placeholder={"최종 수익률 입력(%)"}
            border={"1px"}
            borderColor={"gray.400"}
            size="md"
            type="number"
            value={returnRate}
            onChange={(e) => setReturnRate(e.target.value)}
          />
        </Flex>
        <Flex justifyContent={"space-between"} mt={"3rem"}>
          <Text as={"b"} fontSize={"1.5rem"} flex={1}>
            입금 날짜
          </Text>

          <Input
            flex={1}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="Select Date and Time"
            size="md"
            type="date"
            value={depositDate}
            onChange={(e) => setDepositDate(e.target.value)}
          />
        </Flex>
        <Flex justifyContent={"space-between"} mt={"3rem"}>
          <Text as={"b"} fontSize={"1.5rem"}>
            정산 자료
          </Text>
          <FileUploadButton />
        </Flex>
      </Box>
      <BottomButtonNavbar
        text="신청하기"
        category=""
        hanldeButton={handleSubmit}
      />
    </>
  );
}
