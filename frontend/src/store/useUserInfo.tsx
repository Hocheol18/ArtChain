import { create } from "zustand";
import { createJSONStorage, devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

interface userInfoType {
  profileUrl: string;
  nickname: string;
  walletBalance: string;
  isLogin: boolean;
}

interface UserInfoState {
  userInfo: userInfoType;
}

interface UserInfoActions {
  setUserInfo: (userinfo: userInfoType) => void;
  deleteUserInfo: () => void;
}

const defaultState = {
  profileUrl: "",
  nickname: "",
  walletBalance: "",
  isLogin: false,
};

const useUserInfo = create<UserInfoState & UserInfoActions>()(
  devtools(
    persist(
      (set) => ({
        userInfo: defaultState,
        setUserInfo: (userInfo: userInfoType) => {
          set({ userInfo });
        },
        deleteUserInfo: () => {
          set({ userInfo: defaultState });
        },
      }),
      {
        name: "userInfo",
        storage: createJSONStorage(() => sessionStorage),
        
      }
    )
  )
);

export default useUserInfo;
