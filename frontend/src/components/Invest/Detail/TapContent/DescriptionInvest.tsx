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
import {
  GetFundingResponse,
  Schedule,
} from "../../../../type/invest.interface";

interface Props {
  data: GetFundingResponse;
}

export const DescriptionInvest = ({ data }: Props) => {
  return (
    <Center
      py={8}
      display={"flex"}
      flexDirection={"column"}
      backgroundColor={"white"}
      boxShadow={"lg"}
    >
      {/* 소개 포스터 */}
      <Image src={data.poster} w={"100%"} alt="설명 포스터" />

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
          index={data.scheduleList.length}
          orientation="vertical"
          gap="0"
          size={"lg"}
          height={`${data.scheduleList.length * 70}px`}
        >
          {data.scheduleList.map((step, index) => (
            <Step key={index}>
              <StepIndicator
                style={{ transform: "scale(0.5)", backgroundColor: "#013878" }}
              />

              <Box flexShrink="0">
                <StepTitle style={{ fontWeight: "bold" }}>
                  {step.scheduleName}
                </StepTitle>
                <StepDescription>
                  {step.scheduleDate.split("-")[0]}년{" "}
                  {step.scheduleDate.split("-")[1]}월{" "}
                  {step.scheduleDate.split("-")[2]}일
                </StepDescription>
              </Box>

              <StepSeparator
                style={{ transform: "scale(1)", backgroundColor: "#DBDDE0" }}
              />
            </Step>
          ))}
        </Stepper>
      </Center>
    </Center>
  );
};
