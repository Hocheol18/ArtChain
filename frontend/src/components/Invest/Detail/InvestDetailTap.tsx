import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface InvestTapProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

export const InvestDetailTap = ({ text, active, onClick }: InvestTapProps) => {
  //active에 따라 바뀌는 css
  const [borderColor, setBorderColor] = useState<string>("white");
  const [fontWeight, setfontWeight] = useState<string>("");

  useEffect(() => {
    if (active) {
      setBorderColor("black");
      setfontWeight("bold");
    } else {
      setBorderColor("white");
      setfontWeight("");
    }
  }, [active]);

  return (
    <>
      <Box
        borderBottom={"2px"}
        borderBottomColor={borderColor}
        fontWeight={fontWeight}
        onClick={onClick}
        pb={1}
      >
        {text}
      </Box>
    </>
  );
};
