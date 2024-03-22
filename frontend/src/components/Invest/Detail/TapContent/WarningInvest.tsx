import { Box, ListItem, UnorderedList, Center, Image } from "@chakra-ui/react";

import WarningIcon from "../../../../assets/invest-warning-icon.png";

export const WarningInvest = () => {
  const warningStr = [
    `아트체인은 금융투자상품에 관하여 충분히 설명할 의무가 있으며, 투자자는 투자에 앞서 그러한 설명을 충분히 들으시기 바랍니다.`,
    `아트체인이 제공하는 금융투자상품은 원금 손실이 크게 발생할 수 있고, 손실은 투자자에게 귀속됩니다. 또한 예금자보호법에 따라 예금보험공사가 보호하지 않고, 제 세금이 발생할 수 있습니다.`,
  ];

  return (
    <Box mb={"70px"} pb={3}>
      <Box fontSize={"22"} fontWeight={"bold"} pl={6} mt={5} pb={2}>
        투자자 유의사항
      </Box>
      <Box fontSize={"14"} px={6} textColor={"gray.500"} pb={4}>
        온라인 소액 공모에 대한 투자는 고위험투자로 [예금자보호법]에 따라
        보호되지 않고 투자원금의 손실이 발생할 수 있으므로 투자에 신중을
        기여하시기 바랍니다.
      </Box>
      <Box px={6} borderTop={"1px"} borderTopColor={"gray.300"}>
        <Box
          py={4}
          fontWeight={"bold"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <Box mr={2} pt={1}>
            알려드립니다
          </Box>
          <Image src={WarningIcon} w={"25px"} />
        </Box>
        <Box>
          {warningStr.map((item) => (
            <UnorderedList>
              <ListItem fontSize={"14"} py={1}>
                {item}
              </ListItem>
            </UnorderedList>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
