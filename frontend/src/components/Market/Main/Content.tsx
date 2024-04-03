import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import ContentEnd from "./ContentEnd";
import ContentShow from "./ContentShow";
import { getMarketMainDisplayList } from "../../../api/market";
import { getMarketMainDisplayListInterface } from "../../../type/market.interface";
import { useEffect, useState } from "react";
import Pagenation from "../../Common/Paginations";
import { useParams } from "react-router-dom";

interface Props {
  first: string;
  second: string;
}

export default function Content({ first, second }: Props) {
  const [contents, setContent] = useState<getMarketMainDisplayListInterface[]>(
    []
  );
  const id = useParams() as {id : string}

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
      size: 10,
    })
      .then((res) => setContent(res.data.data))
      .catch((err) => console.log(err));
  }, [first, second, id.id]);

  return (
    <>
      {contents.length >= 1 ? (
        <>
          <SimpleGrid
            spacing="10"
            p="6"
            textAlign="center"
            rounded="lg"
            color="gray.400"
          >
            {contents.map((data: getMarketMainDisplayListInterface, index) => {
              const renderContent = () => {
                if (data.status === "PENDING_SETTLEMENT") {
                  return (
                    <ContentShow
                      key={index}
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
                      key={index}
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
        </>
      ) : (
        <Center h={"500px"}>
          <Text fontSize={"1.5rem"}>현재 판매중인 상품이 없습니다</Text>
        </Center>
      )}
    </>
  );
}
