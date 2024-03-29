import { useEffect, useState } from "react";
import { ArtCharge } from "../components/ChargeAndExchange/Charge/ArtCharge";
import { History } from "../components/ChargeAndExchange/History";

import { CommonTopBox } from "../components/ChargeAndExchange/CommonTopBox";

export const Charge = () => {
  const [check, setCheck] = useState<string>("one");

  const handleCheck = (whatCheck: string) => {
    setCheck(whatCheck);
  };

  useEffect(() => {
    console.log(check);
  }, [check]);

  return (
    <div>
      <CommonTopBox
        text1="아트 충전"
        text2="충전 내역"
        handleCheck={handleCheck}
        check={check}
      />

      {check === "one" ? (
        <ArtCharge check={check} />
      ) : (
        <History type="charge" />
      )}
    </div>
  );
};
