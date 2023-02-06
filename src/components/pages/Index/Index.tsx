import * as React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import { Main } from "../../shared/Main";
import { Work } from "./components/Work/Work";
import { Education } from "./components/Education/Education";
import { Technologies } from "./components/Technologies/Technologies";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Menu } from "./components/Menu";
import { ParallaxProvider } from "react-scroll-parallax";
import { Header } from "./components/Header";

export const Index: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <ParallaxProvider>
          <Menu />
          <Header />
          <AboutMe />
          <Work />
          <Education />
          <Technologies />
        </ParallaxProvider>
      </Main>
    </ThemeProvider>
  );
};
