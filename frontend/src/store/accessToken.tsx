import { create } from "zustand";
import { createJSONStorage, devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

interface userAccessTokenInfterface {
  userAccessToken: string;
}

interface UserAccessTokenActions {
  setUserAccessToken: (userAccessTokenInfo: userAccessTokenInfterface) => void;
}

interface UserAccessTOkenInfoState {
  userAccessTokenInfo: userAccessTokenInfterface;
}

const defaultState = {
  userAccessToken: "",
};

const useUserAccessToken = create<
  UserAccessTOkenInfoState & UserAccessTokenActions
>()(
  devtools(
    persist(
      (set) => ({
        userAccessTokenInfo: defaultState,
        setUserAccessToken: (
          userAccessTokenInfo: userAccessTokenInfterface
        ) => {
          set({ userAccessTokenInfo });
          sessionStorage.setItem("accessToken", userAccessTokenInfo);
        },
      }),
      {
        name: "accessToken",
      }
    )
  )
);

export default useUserAccessToken;
