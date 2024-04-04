import { create } from "zustand";
import { createJSONStorage, devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

export interface distributeInfoType {
  isRecruitSuccess: boolean;
  fundingContractAddress: string;
}

interface UserInfoState {
  distributeInfo: distributeInfoType;
}

interface UserInfoActions {
  setDistributeInfo: (data: distributeInfoType) => void;
}

const defaultState = {
  isRecruitSuccess: true,
  fundingContractAddress: "",
};

const useDistributeInfo = create<UserInfoState & UserInfoActions>()(
  devtools(
    persist(
      (set) => ({
        distributeInfo: defaultState,
        setDistributeInfo: (data: distributeInfoType) => {
          set(() => ({
            distributeInfo: {
              isRecruitSuccess: data.isRecruitSuccess,
              fundingContractAddress: data.fundingContractAddress,
            },
          }));
        },
      }),

      {
        name: "distributeInfo",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useDistributeInfo;
