import React, { PropsWithChildren } from "react";
import styled from "styled-components";
const Container = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
`;
export function Grid({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
