import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'Space Mono', sans-serif`,
  },

  styles: {
    global: {
      body: {
        background: "hsl(185, 41%, 84%)",
      },
    },
  },
});

export default theme;
