import React from "react";
import styled from "styled-components";
import { DateDisplay } from "../../../../../DateDisplay";
import { MaxWidth } from "../../../../../shared/MaxWidth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10em;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3em;
`;
const Content = styled.div``;

const Title = styled.h4`
  margin: 0;
  font-size: 2em;
  flex: 1;
`;

const Details = styled.div`
  text-align: right;
  flex: 2;
`;

const Year = styled.p`
  margin: 0.5em;
  font-size: 1em;
  white-space: nowrap;
`;
const Degree = styled.p`
  margin: 0.5em;
  font-size: 0.75em;
`;
const Location = styled.p`
  margin: 0.5em;
  font-size: 0.75em;
  white-space: nowrap;
`;

export interface EducationItemProp {
  item: {
    startDate: string | null;
    endDate: string | null;
    institution: string | null;
    degree: string | null;
    location: string | null;
    points: readonly (string | null)[] | null;
  };
}
export const EducationItem: React.FC<EducationItemProp> = ({
  item: { startDate, institution, endDate, location, points, degree },
}) => {
  return (
    <Container>
      <MaxWidth>
        <Header>
          <Title>{institution}</Title>
          <Details>
            <Year>
              <DateDisplay date={startDate} /> - <DateDisplay date={endDate} />
            </Year>
            <Degree>{degree}</Degree>
            <Location>{location}</Location>
          </Details>
        </Header>
        <Content>
          {points?.map((point, index) => (
            <p key={index}>{point}</p>
          ))}
        </Content>
      </MaxWidth>
    </Container>
  );
};
