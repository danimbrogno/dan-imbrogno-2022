import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: block;
  padding: 0.5em;
  border: 1px solid #fff;
  border-radius: 6px;
  margin-right: 12px;
  margin-bottom: 12px;
  white-space: nowrap;
  font-size: 1.125em;
  background-color: #efc040;
`;

export interface TechnologyItemProp {
  item: string;
  index: number;
}
export const TechnologyItem: React.FC<TechnologyItemProp> = ({
  item,
  index,
}) => {
  return <Item>{item}</Item>;
};
