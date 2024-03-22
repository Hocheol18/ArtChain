import {
  Box,
  Center,
  Image,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepTitle,
  Stepper,
  Text,
} from "@chakra-ui/react";
import DescriptionPoster from "../../../../assets/inveset-description-tmp-img.jpg";

export const DescriptionInvest = () => {
  const steps = [
    { title: "모집 시작", description: "2024년 02월 05일" },
    { title: "모집 종료", description: "2024년 03월 01일" },
    { title: "전시 계약", description: "2024년 07월 02일" },
    { title: "전시 종료", description: "2024년 10월 02일" },
    { title: "정산 예정일", description: "2024년 01월 04일" },
  ];

  return (
    <Center py={3} mb={"70px"} display={"flex"} flexDirection={"column"}>
      {/* 소개 포스터 */}
      <Image src={DescriptionPoster} w={"100%"} />

      {/* 일정 */}
      <Center
        mt={10}
        borderTop={"1px solid"}
        borderTopColor={"gray.300"}
        w={"100%"}
        pt={5}
        display={"flex"}
        flexDirection={"column"}
      >
        <Center position="relative">
          <Text fontWeight={"bold"} fontSize={"22"} zIndex={1}>
            일정
          </Text>
          <Box
            position="absolute"
            bottom="0px"
            width="50px"
            height="13px"
            bg="blue.100"
            boxShadow={"lg"}
            zIndex={0}
          />
        </Center>
        <Stepper
          my={10}
          index={steps.length}
          orientation="vertical"
          gap="0"
          size={"lg"}
          height={"400px"}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator
                style={{ transform: "scale(0.5)", backgroundColor: "#013878" }}
              />

              <Box flexShrink="0">
                <StepTitle style={{ fontWeight: "bold" }}>
                  {step.title}
                </StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator
                style={{ transform: "scale(1.5)", backgroundColor: "#DBDDE0" }}
              />
            </Step>
          ))}
        </Stepper>
      </Center>
    </Center>
  );
};
