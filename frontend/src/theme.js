import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    base: '0px',
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#F3F2ED",
        color: "#000", 
      },
    },
  },
  fonts: {
    heading: ` "Lora", serif`,
    body: ` "Poppins", sans-serif`,
  },
  breakpoints
});
