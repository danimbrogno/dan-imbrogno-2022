import * as React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import { Main } from "../../shared/Main";
import { Header } from "./components/Header";
import { Work } from "./components/Work/Work";
import { Education } from "./components/Education/Education";
import { Technologies } from "./components/Technologies/Technologies";
import { AboutMe } from "./components/AboutMe";
import { Menu } from "./components/Menu";

export const Index: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Menu />
        <Header />
        <AboutMe />
        <Work />
        <Education />
        <Technologies />
      </Main>
    </ThemeProvider>
  );
};
