import { Box } from "@chakra-ui/react";
import { menuType } from "./InvestDetailBox";

interface InvestTapProps {
  items: menuType[];
  activeID: number;
  setActiveID: (id: number) => void;
}

export const InvestDetailTap = ({
  items,
  activeID,
  setActiveID,
}: InvestTapProps) => {
  return (
    <>
      {items.map((item) => (
        <>
          <Box
            borderBottom={"2px"}
            borderBottomColor={item.id === activeID ? "black" : "white"}
            fontWeight={item.id === activeID ? "bold" : ""}
            borderBottomWidth={item.id === activeID ? "medium" : ""}
            onClick={() => setActiveID(item.id)}
            pb={1}
          >
            {item.name}
          </Box>
        </>
      ))}
    </>
  );
};
