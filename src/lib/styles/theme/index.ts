import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { config } from "./config";

export const theme = extendTheme({
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        // borderRadius: 24,
      },
    },
  },
  colors,
  config,
});
