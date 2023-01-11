import * as React from "react";
import { WorkItem } from "../shared/WorkItem";
import { Section } from "../shared/Section";
import { MaxWidth } from "../../../shared/MaxWidth";
import { List } from "../../../shared/List";
import { ListItem } from "../../../shared/ListItem";
import { SectionTitle } from "../shared/SectionTitle";
import { graphql, useStaticQuery } from "gatsby";

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
    <Section>
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
    </Section>
  );
};
