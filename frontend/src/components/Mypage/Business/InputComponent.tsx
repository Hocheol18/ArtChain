import { AddIcon } from "@chakra-ui/icons";
import { Box, Center, CloseButton, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  first: string;
  second: string;
  check: boolean;
}

export default function InputComponent({ first, second, check }: Props) {
  const [inputs, setInputs] = useState<Array<number>>([]);
  const [totalNum, setTotalNum] = useState<number>(1);

  const addComponent = () => {
    setTotalNum(totalNum + 1);
    const newInput = totalNum;
    setInputs([...inputs, newInput]);
  };

  const removeComponet = (id: number) => {
    setInputs(inputs.filter((input) => input !== id));
  };

  return (
    <>
      {check ? (
        <Box w={"100%"} mt={"1rem"} mb={"1.5rem"}>
          {inputs.map((index: number) => (
            <Flex key={index} justifyContent={"space-between"} mt={"1rem"}>
              <Input
                h={"2rem"}
                w={"45%"}
                rounded={"0.7rem"}
                fontSize={"sm"}
                border={"1px"}
                borderColor={"gray.300"}
                placeholder={first}
              />
              <Flex w={"45%"}>
                <Box w={"85%"}>
                  <Input
                    border={"1px"}
                    borderColor={"gray.400"}
                    placeholder="Select Date and Time"
                    size="sm"
                    type="datetime-local"
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
          {inputs.map((index: number) => (
            <Flex key={index} justifyContent={"space-between"} mt={"1rem"}>
              <Input
                h={"2rem"}
                w={"48%"}
                rounded={"0.7rem"}
                fontSize={"sm"}
                border={"1px"}
                borderColor={"gray.300"}
                placeholder={first}
              />

              <Flex w={"48%"}>
                <Input
                  h={"2rem"}
                  
                  rounded={"0.7rem"}
                  fontSize={"sm"}
                  border={"1px"}
                  borderColor={"gray.300"}
                  placeholder={second}
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
