import { SimpleGrid } from "@chakra-ui/react";
import ContentEnd from "./ContentEnd";
import ContentShow from "./ContentShow";
import { getMarketMainDisplayList } from "../../../api/market";
import { getMarketMainDisplayListInterface } from "../../../type/market.interface";
import { useEffect, useState } from "react";

interface Props {
  first: string;
  second: string;
}

export default function Content({ first, second }: Props) {
  const [contents, setContext] = useState<getMarketMainDisplayListInterface[]>(
    []
  );

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
    <>
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
    </>
  );
}
