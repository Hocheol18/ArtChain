import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import ContentEnd from "./ContentEnd";
import ContentShow from "./ContentShow";
import { getMarketMainDisplayList } from "../../../api/market";
import { getMarketMainDisplayListInterface } from "../../../type/market.interface";
import { useEffect, useRef, useState } from "react";
// import useIntersectionObserver from "../../Common/InfiniteScorll";

interface Props {
  first: string;
  second: string;
}

export default function Content({ first, second }: Props) {
  const [contents, setContext] = useState<getMarketMainDisplayListInterface[]>(
    []
  );

  const [page, setPage] = useState<number>(0);

  // const [observe, unobserve] = useIntersectionObserver(() => {
  //   setPage((page) => page + 1);
  // });

  // useEffect(() => {
  //   if (page === 1) observe(target.current);

  //   const N = data.result.length;
  //   const totalCount = data.totalCount;

  //   if (0 === N || totalCount <= N) {
  //     unobserve(target.current);
  //   }
  // }, [data]);

  const target = useRef(null);

  switch (second) {
    case "최신순":
      second = "ALL";
      break;
    case "높은가격순":
      second = "PENDING_SETTLEMENT";
      break;
    case "낮은가격순":
      second = "SETTLED";
      break;
  }

  useEffect(() => {
    getMarketMainDisplayList({
      category: first,
      status: second,
      page: page,
      size: 6,
    })
      .then((res) => setContext(res.data.data))
      .catch((err) => console.log(err));
  }, [first, second, page]);

  return (
    <Box ref={target} height={"100%"}>
      {contents.length >= 1 ? (
        <SimpleGrid
          spacing="10"
          p="6"
          textAlign="center"
          rounded="lg"
          color="gray.400"
        >
          {contents.map((data: getMarketMainDisplayListInterface) => {
            const renderContent = () => {
              if (data.status === "PENDING_SETTLEMENT") {
                return (
                  <ContentShow
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    nowCoinCount={data.nowCoinCount}
                    poster={data.poster}
                    category={data.category}
                    status={data.status}
                    settlement={data.settlement}
                  />
                );
              } else if (data.status === "SETTLED") {
                return (
                  <ContentEnd
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    nowCoinCount={data.nowCoinCount}
                    poster={data.poster}
                    category={data.category}
                    status={data.status}
                    settlement={data.settlement}
                  />
                );
              }
            };

            return renderContent();
          })}
        </SimpleGrid>
      ) : (
        <Center h={"500px"}>
          <Text fontSize={"1.5rem"}>현재 판매중인 상품이 없습니다</Text>
        </Center>
      )}
    </Box>
  );
}
