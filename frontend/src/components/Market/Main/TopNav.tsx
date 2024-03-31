import { Box, Flex } from "@chakra-ui/layout";

interface Props {
  statusTopNav : string;
  setTopNav: (statusTopNav: string) => void;
}

export default function Martet({ statusTopNav, setTopNav }: Props) {

  return (
    <>
      <Flex minW={"360px"} justifyContent={"center"} mt={"1rem"} ml={"1rem"}>
        {statusTopNav === "ALL" ? (
          <Box borderBottom={"2px"} color={"blue.300"} mr={"0.7rem"}>
            전체
          </Box>
        ) : (
          <Box
            mr={"0.7rem"}
            color={"gray.400"}
            onClick={() => {
              setTopNav("ALL");
            }}
          >
            전체
          </Box>
        )}
        {statusTopNav === "SHOW" ? (
          <Box borderBottom={"2px"} color={"blue.300"} mr={"0.7rem"}>
            공연
          </Box>
        ) : (
          <Box
            mr={"0.7rem"}
            color={"gray.400"}
            onClick={() => {
              setTopNav("SHOW");
            }}
          >
            공연
          </Box>
        )}
        {statusTopNav === "EXHIBITION" ? (
          <Box borderBottom={"2px"} color={"blue.300"} mr={"0.7rem"}>
            전시
          </Box>
        ) : (
          <Box
            mr={"0.7rem"}
            color={"gray.400"}
            onClick={() => {
              setTopNav("EXHIBITION");
            }}
          >
            전시
          </Box>
        )}
        {statusTopNav === "MOVIE" ? (
          <Box borderBottom={"2px"} color={"blue.300"} mr={"0.7rem"}>
            영화
          </Box>
        ) : (
          <Box
            mr={"0.7rem"}
            color={"gray.400"}
            onClick={() => {
              setTopNav("MOVIE");
            }}
          >
            영화
          </Box>
        )}
      </Flex>
    </>
  );
}
