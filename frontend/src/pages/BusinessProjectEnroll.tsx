import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";
import { BottomButtonNavbar } from "../components/Common/Navigation/BottomButtonNavbar";
import FileUploadButton from "../components/Mypage/Business/FileUploadButton";
import InputComponent from "../components/Mypage/Business/InputComponent";
import { useState, useEffect } from "react";
import { useCustomToast } from "../components/Common/Toast";
import { PostFunding } from "../api/invest";
import { useNavigate } from "react-router-dom";

export default function BusinessProjectEnroll() {
  const [projectData, setProjectData] = useState({
    name: "",
    category: "",
    recruitStart: "",
    recruitEnd: "",
    settlement: "",
    goalCoinCount: 0,
    totalBudget: 0,
    unitPrice: 0,
    bep: 0,
    scheduleList: [],
    expectedReturnList: [],
    saleList: [],
    costList: [],
  });

  const toastFunction = useCustomToast();

  //숫자인지 아닌지 확인하는 함수
  const handleIsNotNum = (value: any) => {
    const num = parseInt(value);

    if (value === "" || Number.isNaN(num)) {
      return true;
    } else {
      return false;
    }
  };

  //프로젝트 이름
  const [name, setName] = useState<string>("");
  //카테고리
  const [category, setCategory] = useState<string>("");
  //모집 시작
  const [recruitStart, setRecruitStart] = useState<string>("");
  //모집 종료
  const [recruitEnd, setRecruitEnd] = useState<string>("");
  //정산 예정일
  const [settlement, setSettlement] = useState<string>("");
  //목표 금액
  const [goalCoinCount, setGoalCoinCount] = useState<number>();
  //총 예산 규모
  const [totalBudget, setTotalBudget] = useState<number>();
  //객단가
  const [unitPrice, setUnitPrice] = useState<number>();
  //추정 손익분기점
  const [bep, setBep] = useState<number>();

  //일정 배열
  const [scheduleArr, setScheduleArr] = useState([
    { scheduleName: "", scheduleDate: "" },
  ]);

  //일정 업데이트
  const handleScheduleArrChange = (
    newReturnArr: { scheduleName: string; scheduleDate: string }[]
  ) => {
    setScheduleArr(newReturnArr);
  };

  // const formattedArr = newReturnArr.map((item) => ({
  //   scheduleName: item.scheduleName,
  //   scheduleDate: item.scheduleDate.slice(0, 10), // 'T'를 기준으로 문자열을 분리하고 날짜 부분만 가져옴
  // }));

  //매출 구성 배열
  const [saleArr, setSaleArr] = useState([
    { mainVariety: "", subVariety: "", percentage: "" },
  ]);

  //비용구성 업데이트
  const handleSaleArrChange = (
    newReturnArr: {
      mainVariety: string;
      subVariety: string;
      percentage: string;
    }[]
  ) => {
    setSaleArr([
      { ...saleArr[0] }, // 기존 데이터와 새로운 데이터를 결합하여 첫 번째 요소로 설정
      ...newReturnArr, // 기존 매출 구성의 나머지 부분은 그대로 유지
    ]);
  };

  //비용구성 배열
  const [costArr, setCostArr] = useState([{ mainVariety: "", subVariety: "" }]);

  //비용구성 업데이트
  const handleCostArrChange = (
    newReturnArr: { mainVariety: string; subVariety: string }[]
  ) => {
    setCostArr([
      { ...costArr[0] }, // 기존 데이터와 새로운 데이터를 결합하여 첫 번째 요소로 설정
      ...newReturnArr, // 기존 매출 구성의 나머지 부분은 그대로 유지
    ]);
  };

  //예상수익률 배열
  const [expectedReturnArr, setexpectedReturnArr] = useState([
    { spectatorNum: "", expectedReturn: "" },
  ]);

  //예상수익률 업데이트
  const handleexpectedReturnArrChange = (
    newexpectedReturnArr: { spectatorNum: string; expectedReturn: string }[]
  ) => {
    setexpectedReturnArr([
      { ...expectedReturnArr[0] }, // 기존 데이터와 새로운 데이터를 결합하여 첫 번째 요소로 설정
      ...newexpectedReturnArr, // 기존 매출 구성의 나머지 부분은 그대로 유지
    ]);
  };

  const navigate = useNavigate();

  //제출 함수
  const handleSubmit = async () => {
    setIsReady(true);

    if (
      name === "" ||
      category === "" ||
      recruitStart === "" ||
      recruitEnd === "" ||
      settlement === ""
    ) {
      toastFunction("빈칸을 모두 입력해주세요", false);
      return;
    }

    console.log(handleIsNotNum(bep));

    if (
      handleIsNotNum(goalCoinCount) ||
      handleIsNotNum(totalBudget) ||
      handleIsNotNum(unitPrice) ||
      handleIsNotNum(bep)
    ) {
      toastFunction(
        "목표 금액, 총 예산 규모, 객단가, 추정 손익분기점을 숫자로 기입하였는지 확인해주세요",
        false
      );
      return;
    }

    //일정 제목 유효성 검사
    handleCheck2(
      scheduleArr,
      "scheduleName",
      "일정에 빈칸이 있는지 확인해주세요"
    );
    if (!isReady) {
      return;
    }

    //일정 날짜 유효성 검사
    handleCheck2(
      scheduleArr,
      "scheduleDate",
      "일정에 빈칸이 있는지 확인해주세요"
    );
    if (!isReady) {
      return;
    }

    // 매출 구성, 비용 구성, 파일들 유효성 검사.. (추후에)

    // 예상수익률-예상수익률% 유효성 검사
    handleCheck(
      expectedReturnArr,
      "expectedReturn",
      "예상수익률 예상수익률을 숫자로 입력해주세요"
    );
    if (!isReady) {
      return;
    }

    console.log(isReady);

    if (isReady) {
      try {
        const project = {
          name: name,
          category: category,
          recruitStart: recruitStart,
          recruitEnd: recruitEnd,
          settlement: settlement,
          goalCoinCount: goalCoinCount,
          totalBudget: totalBudget,
          unitPrice: unitPrice,
          bep: bep,
          scheduleList: scheduleArr,
          expectedReturnList: expectedReturnArr,
          saleList: saleArr,
          costList: costArr,
        };

        const formData = new FormData();
        if (poster) {
          formData.append("poster", poster);
        }
        if (description) {
          formData.append("descriptionImg", description);
        }
        // 먼저 dto를 formData에 추가해야 합니다.
        const json = JSON.stringify(project);
        const blob = new Blob([json], { type: "application/json" });
        formData.append("dto", blob);

        // 수정된 formData를 PostSettlement 함수에 전달
        const responseData = await PostFunding(formData);

        console.log("Received Response:", responseData);
        toastFunction("프로젝트 신청이 완료되었습니다", true);
        navigate("/businesspage"); // 응답을 받은 후 navigate를 실행합니다.
      } catch (error) {
        toastFunction(
          "빈칸과 숫자를 써야 할 곳에 제대로 썼는지 확인해주세요",
          false
        );
      }
    }
  };

  //유효성 검사하는 함수(number)
  const handleCheck = (arr: any, param: string, falseText: string) => {
    // 예상수익률 - 관객수 유효성 검사
    for (const item of arr) {
      if (handleIsNotNum(item[param]) || item[param] === "") {
        setIsReady(false);
        toastFunction(falseText, false);
        break; // 반복문 종료
      }
    }
  };

  //유효성 검사하는 함수(string)
  const handleCheck2 = (arr: any, param: string, falseText: string) => {
    // 예상수익률 - 관객수 유효성 검사
    for (const item of arr) {
      if (item[param] === "") {
        setIsReady(false);
        toastFunction(falseText, false);
        break; // 반복문 종료
      }
    }
  };

  //axios 날릴 준비 완
  const [isReady, setIsReady] = useState<boolean>(false);

  //작품 포스터
  const [poster, setPoster] = useState<File>();

  //작품 설명포스터
  const [description, setDescription] = useState<File>();

  const handlePoster = (file: File) => {
    setPoster(file);
  };

  const handleDescription = (file: File) => {
    setDescription(file);
  };

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <>
      <Box p={"1.5rem"} mb={"3rem"}>
        <Box>
          <Text as={"b"} fontSize={"1.5rem"}>
            프로젝트 등록
          </Text>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            프로젝트 이름
          </Text>
          <Input
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
            placeholder="프로젝트 이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            포스터
          </Text>

          <Box mt={"0.5rem"}>
            <FileUploadButton handleImage={handlePoster} />
          </Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"} w={"100%"}>
          <Text as={"b"} fontSize={"1rem"}>
            카테고리
          </Text>
          <Select
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="선택"
            mt={"0.5rem"}
            mr={"0.5rem"}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="SHOW">공연</option>
            <option value="EXHIBITION">전시</option>
            <option value="MOVIE">영화</option>
          </Select>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            목표 금액
          </Text>
          <Input
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
            placeholder="금액을 입력하세요"
            type="number"
            value={goalCoinCount}
            onChange={(e) => setGoalCoinCount(e.target.value)}
          />
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            일정
          </Text>
        </Box>
        <Flex justifyContent={"space-between"} mt={"1rem"} gap={2}>
          <Input
            flex={1}
            h={"2rem"}
            w={"45%"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="모집 시작"
            readOnly
          />

          <Input
            flex={1}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="Select Date and Time"
            size="sm"
            type="date"
            value={recruitStart}
            onChange={(e) => setRecruitStart(e.target.value)}
          />
        </Flex>
        <Flex justifyContent={"space-between"} mt={"1rem"} gap={2}>
          <Input
            flex={1}
            h={"2rem"}
            w={"45%"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="모집 종료"
            readOnly
          />

          <Input
            flex={1}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="Select Date and Time"
            size="sm"
            type="date"
            value={recruitEnd}
            onChange={(e) => setRecruitEnd(e.target.value)}
          />
        </Flex>
        <Flex justifyContent={"space-between"} mt={"1rem"} gap={2}>
          <Input
            flex={1}
            h={"2rem"}
            w={"45%"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="정산 예정일"
            readOnly
          />

          <Input
            flex={1}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="Select Date and Time"
            size="sm"
            type="date"
            value={settlement}
            onChange={(e) => setSettlement(e.target.value)}
          />
        </Flex>

        <InputComponent
          first="일정 입력(선택)"
          second=""
          third=""
          thirdText=""
          check={true}
          onChange={handleScheduleArrChange} // 비용 구성 변경 사항을 감지하고 처리
          typeText="scheduleName"
          numberText="scheduleDate"
        />

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            프로젝트 설명 이미지
          </Text>

          <Box mt={"0.5rem"}>
            <FileUploadButton handleImage={handleDescription} />
          </Box>
        </Box>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            매출 구성
          </Text>
        </Box>
        <Flex justifyContent={"space-between"} mt={"1rem"} gap={2}>
          <Input
            flex={1}
            h={"2rem"}
            w={"48%"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="매출 종류"
            value={saleArr[0].mainVariety}
            onChange={(e) =>
              setSaleArr([{ ...saleArr[0], mainVariety: e.target.value }])
            }
          />

          <Input
            flex={1}
            h={"2rem"}
            w={"48%"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="매출 내용"
            value={saleArr[0].subVariety}
            onChange={(e) =>
              setSaleArr([{ ...saleArr[0], subVariety: e.target.value }])
            }
          />
          <Input
            flex={1}
            h={"2rem"}
            w={"48%"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="매출 비율(%)"
            type="number"
            value={saleArr[0].percentage}
            onChange={(e) =>
              setSaleArr([{ ...saleArr[0], percentage: e.target.value }])
            }
          />
        </Flex>
        <InputComponent
          first="매출 종류"
          second="매출 내용"
          third="매출 비용"
          thirdText="percentage"
          check={false}
          onChange={handleSaleArrChange} // 매출 구성 변경 사항을 감지하고 처리
          typeText="mainVariety"
          numberText="subVariety"
        />

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            비용 구성
          </Text>
        </Box>
        <Flex justifyContent={"space-between"} mt={"1rem"} gap={2}>
          <Input
            flex={1}
            h={"2rem"}
            w={"48%"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="종류를 입력하세요"
            value={costArr[0].mainVariety}
            onChange={(e) =>
              setCostArr([{ ...costArr[0], mainVariety: e.target.value }])
            }
          />

          <Input
            flex={1}
            h={"2rem"}
            w={"48%"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="비용 내용을 입력하세요"
            value={costArr[0].subVariety}
            onChange={(e) =>
              setCostArr([{ ...costArr[0], subVariety: e.target.value }])
            }
          />
        </Flex>
        <InputComponent
          first="종류를 입력하세요"
          second="비용 내용을 입력하세요"
          third=""
          thirdText=""
          check={false}
          onChange={handleCostArrChange} // 비용 구성 변경 사항을 감지하고 처리
          typeText="mainVariety"
          numberText="subVariety"
        />

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            총 예산 규모
          </Text>
          <Input
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
            placeholder="금액을 입력하세요"
            value={totalBudget}
            onChange={(e) => setTotalBudget(e.target.value)}
          />
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            객단가
          </Text>
          <Input
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
            placeholder="금액을 입력하세요"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
          />
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            추정 손익분기점
          </Text>
          <Input
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
            placeholder="금액을 입력하세요"
            value={bep}
            onChange={(e) => setBep(e.target.value)}
          />
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            예상 수익률
          </Text>
          <Flex justifyContent={"space-between"} mt={"1rem"} gap={2}>
            <Input
              flex={1}
              h={"2rem"}
              w={"48%"}
              rounded={"0.7rem"}
              fontSize={"sm"}
              border={"1px"}
              borderColor={"gray.400"}
              placeholder="관객수(숫자만 입력)"
              type="number"
              value={expectedReturnArr[0].spectatorNum}
              onChange={(e) =>
                setexpectedReturnArr([
                  { ...expectedReturnArr[0], spectatorNum: e.target.value },
                ])
              }
            />

            <Input
              flex={1}
              h={"2rem"}
              w={"48%"}
              rounded={"0.7rem"}
              fontSize={"sm"}
              border={"1px"}
              borderColor={"gray.400"}
              placeholder="예상수익률(%)"
              value={expectedReturnArr[0].expectedReturn}
              type="number"
              onChange={(e) =>
                setexpectedReturnArr([
                  { ...expectedReturnArr[0], expectedReturn: e.target.value },
                ])
              }
            />
          </Flex>
          <InputComponent
            first="관객수"
            second="예상수익률(%)"
            third=""
            thirdText=""
            check={false}
            onChange={handleexpectedReturnArrChange} // 매출 구성 변경 사항을 감지하고 처리
            typeText="spectatorNum"
            numberText="expectedReturn"
          />
        </Box>
      </Box>

      <BottomButtonNavbar
        text="등록하기"
        category=""
        hanldeButton={handleSubmit}
      />
    </>
  );
}
