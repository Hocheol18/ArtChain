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
  totalPieceCount: 0,
};

const useSettlementInfo = create<UserInfoState & UserInfoActions>()(
  devtools(
    persist(
      (set) => ({
        settlementInfo: defaultState,
        setSettlementInfo: (settlementInfo: settlementInfoType) => {
          set({ settlementInfo });
        },
        setSettlementInfoData: (data: Settlement[]) => {
          set((state) => ({
            settlementInfo: {
              ...state.settlementInfo,
              data,
            },
          }));
        },
        setSettlementInfoContractAddress: (fundingContractAddress: string) => {
          set((state) => ({
            settlementInfo: {
              ...state.settlementInfo,
              fundingContractAddress,
            },
          }));
        },
        setTotalPieceCount: (totalPieceCount: number) => {
          set((state) => ({
            settlementInfo: {
              ...state.settlementInfo,
              totalPieceCount,
            },
          }));
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
