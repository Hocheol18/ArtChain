import { extendTheme } from "@chakra-ui/theme-utils";
import colors from "./colors";

extendTheme;

const { primary } = colors;

const Theme = extendTheme({
  fonts: {
    body: "'Pretendard-Regular', sans-serif",
  },
  colors: {
    white: {
      100: primary.white,
    },
    black: {
      100: primary.black,
    },
    blue: {
      100: primary.blue100,
      200: primary.blue200,
      300: primary.blue300,
      400: primary.blue400,
    },
    gray: {
      100: primary.gray100,
      200: primary.gray200,
      300: primary.gray300,
      400: primary.gray400,
      500: primary.gray500,
    },
    red: {
      100: primary.red,
    },
  },
});

export { Theme };
