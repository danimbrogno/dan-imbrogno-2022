import * as React from "react";
import { Section } from "../../shared/Section";
import { MaxWidth } from "../../../../shared/MaxWidth";
import { List } from "../../../../shared/List";
import { ListItem } from "../../../../shared/ListItem";
import { SectionTitle } from "../../shared/SectionTitle";
import { graphql, useStaticQuery } from "gatsby";
import { EducationItem } from "./components/EducationItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(9, 121, 78, 1);
  border-top: 20px solid #075537;
  padding: 3em 2em;
  color: #fff;
`;

export const Education = () => {
  const data = useStaticQuery<Queries.EducationQuery>(graphql`
    query Education {
      allEducationJson(sort: [{ endDate: DESC }]) {
        edges {
          node {
            id
            institution
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
    <Container id="education">
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
  );
};
