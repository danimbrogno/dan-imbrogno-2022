import React from "react";
import styled from "styled-components";
import { DateDisplay } from "../../../DateDisplay";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h4`
  margin: 0;
`;

const Details = styled.div`
  text-align: right;
`;

export interface WorkItemProp {
  item: {
    startDate: string | null;
    endDate: string | null;
    company: string | null;
    title: string | null;
    location: string | null;
    points: readonly (string | null)[] | null;
  };
}
export const WorkItem: React.FC<WorkItemProp> = ({
  item: { startDate, company, endDate, location, points, title },
}) => {
  return (
    <Container>
      <Header>
        <Title>{company}</Title>
        <Details>
          <DateDisplay date={startDate} /> - <DateDisplay date={endDate} />
          <p>{title}</p>
          <p>{location}</p>
        </Details>
      </Header>
      {points?.map((point, index) => (
        <p key={index}>{point}</p>
      ))}
    </Container>
  );
};
