import { create } from "zustand";
import { createJSONStorage, devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { Settlement } from "../type/settlement.interface";

export interface settlementInfoType {
  data: Settlement[];
  fundingContractAddress: string;
  totalPieceCount: number;
}

interface UserInfoState {
  settlementInfo: settlementInfoType;
}

interface UserInfoActions {
  setSettlementInfoData: (data: Settlement[]) => void;
  setSettlementInfoContractAddress: (fundingContractAddress: string) => void;
  setTotalPieceCount: (totalPieceCount: number) => void;
}

const defaultState = {
  data: [],
  fundingContractAddress: "",
  totalPieceCount: "",
};

const useSettlementInfo = create<UserInfoState & UserInfoActions>()(
  devtools(
    persist(
      (set) => ({
        settlementInfo: defaultState,
        setSettlementInfoContractAddress 
        setSettlementInfo: (settlementInfo: settlementInfoType) => {
          set({ settlementInfo });
        },
      }),
      {
        name: "settlementInfo",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useSettlementInfo;
