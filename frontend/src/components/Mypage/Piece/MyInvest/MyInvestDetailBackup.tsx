import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

import falloutboy from "../../../../assets/falloutboy.png";
import puzzle from "../../../../assets/puzzle.svg";
import CommonNotice from "../../Business/CommonNotice";

interface Props {
  isNow: string;
}

export default function MyInvestDetailBackup({ isNow }: Props) {
  return (
    <>
      {isNow === "now" ? (
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Flex
                    ml={"0.5rem"}
                    mt={"0.5rem"}
                    mb={"0.5rem"}
                    w={"100%"}
                    maxH={"160px"}
                  >
                    <Image w={"100px"} h={"150px"} src={falloutboy} />

                    <Flex direction={"column"} ml={"0.3rem"}>
                      <Box w={"40%"}>
                        <CommonNotice
                          first="진행중"
                          second=""
                          thrid=""
                          isNow={isNow}
                        />
                      </Box>
                      <Flex
                        direction={"column"}
                        justifyContent={"space-between"}
                        h={"100%"}
                      >
                        <Text
                          ml={"0.5rem"}
                          as={"b"}
                          fontSize={"1.2rem"}
                          mt={"0.2rem"}
                        >
                          Fall Out Boy :: 2024 Seoul Concert
                        </Text>
                        <Box
                          bgColor={"blue.100"}
                          w={"50%"}
                          borderRadius={"1rem"}
                          ml={"0.5rem"}
                          borderColor={"blue.100"}
                          border={"1px"}
                          mb={"0.3rem"}
                        >
                          <Center
                            ml={"0.3rem"}
                            mr={"0.3rem"}
                            mt={"0.1rem"}
                            mb={"0.1rem"}
                          >
                            <Image
                              boxSize={"1.3rem"}
                              src={puzzle}
                              color={"blue.400"}
                            ></Image>
                            <Text
                              as={"b"}
                              color={"blue.400"}
                              fontSize={"1rem"}
                              ml={"0.2rem"}
                            >
                              10 조각
                            </Text>
                          </Center>
                        </Box>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <Box bgColor={"gray.100"}>
              <AccordionPanel pb={4}>
                <Flex justifyContent={"space-between"}>
                  <Flex direction={"column"}>
                    <Text fontSize={"1rem"} as={"b"}>
                      예상 정산가
                    </Text>
                    <Text fontSize={"0.9rem"}>10.54 아트</Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text fontSize={"1rem"} as={"b"}>
                      조각 당 평단가
                    </Text>
                    <Text fontSize={"0.9rem"}>1.3 아트</Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text fontSize={"1rem"} as={"b"}>
                      정산일
                    </Text>
                    <Text fontSize={"0.9rem"}>2024.04.05(금)</Text>
                  </Flex>
                </Flex>
              </AccordionPanel>
            </Box>
          </AccordionItem>
        </Accordion>
      ) : isNow === "wait" ? (
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Flex
                    ml={"0.5rem"}
                    mt={"0.5rem"}
                    mb={"0.5rem"}
                    w={"100%"}
                    maxH={"160px"}
                  >
                    <Image w={"100px"} h={"150px"} src={falloutboy} />

                    <Flex direction={"column"}>
                      <Box w={"40%"}>
                        <CommonNotice
                          first=""
                          second="모집종료"
                          thrid=""
                          isNow={isNow}
                        />
                      </Box>
                      <Flex
                        direction={"column"}
                        justifyContent={"space-between"}
                        h={"100%"}
                      >
                        <Text
                          ml={"0.5rem"}
                          as={"b"}
                          fontSize={"1.2rem"}
                          mt={"0.2rem"}
                        >
                          Fall Out Boy :: 2024 Seoul Concert
                        </Text>
                        <Box
                          bgColor={"blue.100"}
                          w={"50%"}
                          borderRadius={"1rem"}
                          ml={"0.5rem"}
                          borderColor={"blue.100"}
                          border={"1px"}
                          mb={"0.3rem"}
                        >
                          <Center
                            ml={"0.3rem"}
                            mr={"0.3rem"}
                            mt={"0.1rem"}
                            mb={"0.1rem"}
                          >
                            <Image
                              boxSize={"1.3rem"}
                              src={puzzle}
                              color={"blue.400"}
                            ></Image>
                            <Text
                              as={"b"}
                              color={"blue.400"}
                              fontSize={"1rem"}
                              ml={"0.2rem"}
                            >
                              10 조각
                            </Text>
                          </Center>
                        </Box>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <Box bgColor={"gray.100"}>
              <AccordionPanel pb={4}>
                <Flex justifyContent={"space-between"}>
                  <Flex direction={"column"}>
                    <Text fontSize={"1rem"} as={"b"}>
                      예상 정산가
                    </Text>
                    <Text fontSize={"0.9rem"}>10.54 아트</Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text fontSize={"1rem"} as={"b"}>
                      조각 당 평단가
                    </Text>
                    <Text fontSize={"0.9rem"}>1.3 아트</Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text fontSize={"1rem"} as={"b"}>
                      정산일
                    </Text>
                    <Text fontSize={"0.9rem"}>2024.04.05(금)</Text>
                  </Flex>
                </Flex>
              </AccordionPanel>
            </Box>
          </AccordionItem>
        </Accordion>
      ) : (
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Flex
                    ml={"0.5rem"}
                    mt={"0.5rem"}
                    mb={"0.5rem"}
                    w={"100%"}
                    maxH={"160px"}
                  >
                    <Image w={"100px"} h={"150px"} src={falloutboy} />

                    <Flex direction={"column"}>
                      <Box w={"40%"}>
                        <CommonNotice
                          first=""
                          second=""
                          thrid="정산완료"
                          isNow={isNow}
                        />
                      </Box>
                      <Flex
                        direction={"column"}
                        justifyContent={"space-around"}
                        h={"100%"}
                      >
                        <Text ml={"0.5rem"} as={"b"} fontSize={"1.2rem"}>
                          Fall Out Boy :: 2024 Seoul Concert
                        </Text>
                        <Box
                          bgColor={"blue.100"}
                          w={"50%"}
                          borderRadius={"1rem"}
                          ml={"0.5rem"}
                          borderColor={"blue.100"}
                          border={"1px"}
                          mb={"0.3rem"}
                        >
                          <Center
                            ml={"0.3rem"}
                            mr={"0.3rem"}
                            mt={"0.1rem"}
                            mb={"0.1rem"}
                          >
                            <Image
                              boxSize={"1.3rem"}
                              src={puzzle}
                              color={"blue.400"}
                            ></Image>
                            <Text
                              as={"b"}
                              color={"blue.400"}
                              fontSize={"1rem"}
                              ml={"0.2rem"}
                            >
                              10 조각
                            </Text>
                          </Center>
                        </Box>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <Box bgColor={"gray.100"}>
              <AccordionPanel pb={4}>
                <Flex justifyContent={"space-between"}>
                  <Flex direction={"column"}>
                    <Text fontSize={"1rem"} as={"b"}>
                      예상 정산가
                    </Text>
                    <Text fontSize={"0.9rem"}>10.54 아트</Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text fontSize={"1rem"} as={"b"}>
                      조각 당 평단가
                    </Text>
                    <Text fontSize={"0.9rem"}>1.3 아트</Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Text fontSize={"1rem"} as={"b"}>
                      정산일
                    </Text>
                    <Text fontSize={"0.9rem"}>2024.04.05(금)</Text>
                  </Flex>
                </Flex>
              </AccordionPanel>
            </Box>
          </AccordionItem>
        </Accordion>
      )}
    </>
  );
}
