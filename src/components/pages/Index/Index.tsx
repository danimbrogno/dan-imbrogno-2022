import * as React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import { Main } from "../../shared/Main";
import { Header } from "./components/Header";
import { Qualifications } from "./components/Qualifications";
import { Work } from "./components/Work";
import { Education } from "./components/Education/Education";
import { Technologies } from "./components/Technologies/Technologies";

export const Index: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Header />
        <Qualifications />
        <Work />
        <Education />
        <Technologies />
      </Main>
    </ThemeProvider>
  );
};
