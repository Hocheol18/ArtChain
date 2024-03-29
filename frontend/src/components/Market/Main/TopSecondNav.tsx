import { Box, Flex, Text } from "@chakra-ui/react";

interface Props {
  first: string;
  second: string;
  third: string;
  forth: string;
  isCheck: boolean;
  statusTopSecondNav : string;
  setSecondTopNav: (statusTopSecondNav: string) => void;
}

export default function TopSecondNav({
  first,
  second,
  third,
  forth,
  isCheck,
  statusTopSecondNav,
  setSecondTopNav,
}: Props) {
  
  return (
    <>
      {isCheck ? (
        <Flex justifyContent={"center"} mt={"0.5rem"} mr={"0.5rem"}>
          {statusTopSecondNav === "ALL" ? (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text as={"b"} color={"black.100"}>
                {first}
              </Text>
            </Box>
          ) : (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text
                as={"b"}
                color={"gray.400"}
                onClick={() => {
                  setSecondTopNav("ALL");
                }}
              >
                {first}
              </Text>
            </Box>
          )}
          {statusTopSecondNav === "PENDING_SETTLEMENT" ? (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text as={"b"} color={"black.100"}>
                {second}
              </Text>
            </Box>
          ) : (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text
                as={"b"}
                color={"gray.400"}
                onClick={() => setSecondTopNav("PENDING_SETTLEMENT")}
              >
                {second}
              </Text>
            </Box>
          )}

          {statusTopSecondNav === "SETTLED" ? (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text as={"b"} color={"black.100"}>
                {third}
              </Text>
            </Box>
          ) : (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text
                as={"b"}
                color={"gray.400"}
                onClick={() => setSecondTopNav("SETTLED")}
              >
                {third}
              </Text>
            </Box>
          )}
        </Flex>
      ) : (
        <Flex justifyContent={"center"} mr={"0.5rem"}>
          {statusTopSecondNav === "Total" ? (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text as={"b"} color={"black.100"}>
                {first}
              </Text>
            </Box>
          ) : (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text
                as={"b"}
                color={"gray.400"}
                onClick={() => {
                  setSecondTopNav("Total");
                }}
              >
                {first}
              </Text>
            </Box>
          )}
          {statusTopSecondNav === "PENDING_SETTLEMENT" ? (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text as={"b"} color={"black.100"}>
                {second}
              </Text>
            </Box>
          ) : (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text
                as={"b"}
                color={"gray.400"}
                onClick={() => setSecondTopNav("PENDING_SETTLEMENT")}
              >
                {second}
              </Text>
            </Box>
          )}

          {statusTopSecondNav === "SETTLED" ? (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text as={"b"} color={"black.100"}>
                {third}
              </Text>
            </Box>
          ) : (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text
                as={"b"}
                color={"gray.400"}
                onClick={() => setSecondTopNav("SETTLED")}
              >
                {third}
              </Text>
            </Box>
          )}
          {statusTopSecondNav === "FundSETTLED" ? (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text as={"b"} color={"black.100"}>
                {forth}
              </Text>
            </Box>
          ) : (
            <Box
              px={"0.8rem"}
              py={"0.2rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              border={"1px"}
              borderColor={"gray.300"}
              ml={"0.5rem"}
            >
              <Text
                as={"b"}
                color={"gray.400"}
                onClick={() => setSecondTopNav("FundSETTLED")}
              >
                {forth}
              </Text>
            </Box>
          )}
        </Flex>
      )}
    </>
  );
}
