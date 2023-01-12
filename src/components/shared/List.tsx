import React, { PropsWithChildren } from "react";
import style from "styled-components";

const ListColumnStyle = style.ul`
list-style:none;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`;
const ListRowStyle = style.ul`
list-style:none;
margin: 0;
padding: 0;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

export const List: React.FC<
  PropsWithChildren & { direction?: "row" | "column" }
> = ({ children, direction = "column" }) =>
  direction === "row" ? (
    <ListRowStyle>{children}</ListRowStyle>
  ) : (
    <ListColumnStyle>{children}</ListColumnStyle>
  );
