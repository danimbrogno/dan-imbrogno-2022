import * as React from "react";
import { MaxWidth } from "../../../../shared/MaxWidth";
import { List } from "../../../../shared/List";
import { ListItem } from "../../../../shared/ListItem";
import { SectionTitle } from "../../../../shared/SectionTitle";
import { EducationItem } from "./components/EducationItem";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { graphql, useStaticQuery } from "gatsby";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(9, 121, 78, 1);
  border-top: 20px solid #075537;
  padding: 3em 2em;
  color: #fff;
`;

export const Education = () => {
  const data = useStaticQuery<Queries.EducationDataQuery>(graphql`
    query EducationData {
      allEducationJson(sort: [{ endDate: DESC }]) {
        edges {
          node {
            id
            institution
            degree
            startDate
            endDate
            location
            points
          }
        }
      }
    }
  `);

  return (
    <Parallax id="education" speed={0}>
      <Container>
        <MaxWidth>
          <SectionTitle>Education</SectionTitle>
          <List>
            {data.allEducationJson.edges.map(({ node }) => (
              <ListItem key={node.id}>
                <EducationItem item={node} />
              </ListItem>
            ))}
          </List>
        </MaxWidth>
      </Container>
    </Parallax>
  );
};
