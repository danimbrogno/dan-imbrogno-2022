import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    primaryColor: "#ffffff", //(a deep blue)
    secondaryColor: "#fdd835", // (a bright yellow)
    tertiaryColor: "#a0aec0", // (a light blue-gray)
  },
  text: {
    primaryColor: "#FFF", // (a dark gray)
    secondaryColor: "#FFF",
    tertiaryColor: "#FFF",
  },
  breakPoints: {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 256,
  },
};
