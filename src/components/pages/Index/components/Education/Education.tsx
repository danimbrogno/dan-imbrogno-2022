import * as React from "react";
import { Section } from "../../shared/Section";
import { MaxWidth } from "../../../../shared/MaxWidth";
import { List } from "../../../../shared/List";
import { ListItem } from "../../../../shared/ListItem";
import { SectionTitle } from "../../shared/SectionTitle";
import { graphql, useStaticQuery } from "gatsby";
import { EducationItem } from "./components/EducationItem";

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
    <Section>
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
    </Section>
  );
};
