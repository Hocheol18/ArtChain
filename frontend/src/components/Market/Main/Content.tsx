import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import ContentEnd from "./ContentEnd";
import ContentShow from "./ContentShow";
import { getMarketMainDisplayList } from "../../../api/market";
import { getMarketMainDisplayListInterface } from "../../../type/market.interface";
import { useEffect, useRef, useState } from "react";

interface Props {
  first: string;
  second: string;
}

export default function Content({ first, second }: Props) {
  const target = useRef(null);

  useEffect(() => {
    observer.observe(target.current);
  }, []);

  const options = {
    threshold: 1.0,
  };

  const callback = () => {
    target.current.innerText += "관측되었습니다";
  };

  const observer = new IntersectionObserver(callback, options);

  const [contents, setContext] = useState<getMarketMainDisplayListInterface[]>(
    []
  );

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
      page: 0,
      size: 6,
    })
      .then((res) => setContext(res.data.data))
      .catch((err) => console.log(err));
  }, [first, second]);

  return (
    <Box>
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
