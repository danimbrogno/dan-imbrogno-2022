import * as React from "react";
import { WorkItem } from "./components/WorkItem";
import { List } from "../../../../shared/List";
import { ListItem } from "../../../../shared/ListItem";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { SectionTitle } from "../../shared/SectionTitle";
import { MaxWidth } from "../../../../shared/MaxWidth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #421c62;
  border-top: 20px solid #170923;
  padding: 3em 2em;
  color: #fff;
`;

export const Work = () => {
  const data = useStaticQuery<Queries.WorkQuery>(graphql`
    query Work {
      allWorkJson(sort: [{ endDate: DESC }]) {
        edges {
          node {
            id
            company
            startDate
            endDate
            title
            location
            points
          }
        }
      }
    }
  `);
  return (
    <Container id="experience">
      <MaxWidth>
        <SectionTitle>Experience</SectionTitle>
        <List>
          {data.allWorkJson.edges.map(({ node }) => (
            <ListItem key={node.id}>
              <WorkItem item={node} />
            </ListItem>
          ))}
        </List>
      </MaxWidth>
    </Container>
  );
};
