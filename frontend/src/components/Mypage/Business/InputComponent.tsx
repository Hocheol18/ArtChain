import { AddIcon } from "@chakra-ui/icons";
import { Box, Center, CloseButton, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  first: string;
  second: string;
  check: boolean;
  onChange: (newData: any[]) => void;
  typeText: string;
  numberText: string;
}

export default function InputComponent({
  first,
  second,
  check,
  onChange,
  typeText,
  numberText,
}: Props) {
  const [inputs, setInputs] = useState<Array<any>>([]);

  const type = typeText;
  const ratio = numberText;

  //input 추가
  const addComponent = () => {
    const newInput = { [type]: "", [ratio]: "" }; // 새로운 입력값을 초기화
    setInputs([...inputs, newInput]);
    onChange([...inputs, newInput]); // 변경된 데이터를 부모 컴포넌트로 전달
  };

  //input 삭제
  const removeComponet = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1); // 해당 인덱스의 데이터를 제거
    setInputs(newInputs);
    onChange(newInputs); // 변경된 데이터를 부모 컴포넌트로 전달
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    key: string
  ) => {
    const newInputs = [...inputs];
    newInputs[index][key] = e.target.value; // 해당 인덱스의 필드를 업데이트
    setInputs(newInputs);
    onChange(newInputs); // 변경된 데이터를 부모 컴포넌트로 전달
  };

  return (
    <>
      {check ? (
        <Box w={"100%"} mt={"1rem"} mb={"1.5rem"}>
          {inputs.map((input, index: number) => (
            <Flex key={index} justifyContent={"space-between"} mt={"1rem"}>
              <Input
                h={"2rem"}
                w={"45%"}
                rounded={"0.7rem"}
                fontSize={"sm"}
                border={"1px"}
                borderColor={"gray.300"}
                placeholder={first}
                value={input[type]} //type에 해당하는 값
                onChange={(e) => handleInputChange(e, index, type)} //type필드 업데이트
              />
              <Flex w={"45%"}>
                <Box w={"85%"}>
                  <Input
                    border={"1px"}
                    borderColor={"gray.400"}
                    placeholder="Select Date and Time"
                    size="sm"
                    type="datetime-local"
                    value={input[ratio]} // ratio 필드에 해당하는 값
                    onChange={(e) => handleInputChange(e, index, ratio)} // ratio 필드를 업데이트하는 핸들러
                  />
                </Box>
                <CloseButton
                  w={"3%"}
                  ml={"1rem"}
                  size="md"
                  onClick={() => {
                    removeComponet(index);
                  }}
                />
              </Flex>
            </Flex>
          ))}
          <Box
            py={"0.6rem"}
            rounded={"0.7rem"}
            mt={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"blue.300"}
            onClick={addComponent}
          >
            <Center>
              <AddIcon boxSize={5} />
            </Center>
          </Box>
        </Box>
      ) : (
        <Box w={"100%"} mt={"1rem"} mb={"1.5rem"}>
          {inputs.map((input, index: number) => (
            <Flex key={index} justifyContent={"space-between"} mt={"1rem"}>
              <Input
                h={"2rem"}
                w={"48%"}
                rounded={"0.7rem"}
                fontSize={"sm"}
                border={"1px"}
                borderColor={"gray.300"}
                placeholder={first}
                value={input[type]} //type에 해당하는 값
                onChange={(e) => handleInputChange(e, index, type)} //type필드 업데이트
              />

              <Flex w={"48%"}>
                <Input
                  h={"2rem"}
                  rounded={"0.7rem"}
                  fontSize={"sm"}
                  border={"1px"}
                  borderColor={"gray.300"}
                  placeholder={second}
                  type="number"
                  value={input[ratio]} // ratio 필드에 해당하는 값
                  onChange={(e) => handleInputChange(e, index, ratio)} // ratio 필드를 업데이트하는 핸들러
                />
                <CloseButton
                  w={"3%"}
                  ml={"1rem"}
                  size="md"
                  onClick={() => {
                    removeComponet(index);
                  }}
                />
              </Flex>
            </Flex>
          ))}
          <Box
            py={"0.6rem"}
            rounded={"0.7rem"}
            mt={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"blue.300"}
            onClick={addComponent}
          >
            <Center>
              <AddIcon boxSize={5} />
            </Center>
          </Box>
        </Box>
      )}
    </>
  );
}
