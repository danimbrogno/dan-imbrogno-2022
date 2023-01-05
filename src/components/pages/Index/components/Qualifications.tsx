import * as React from "react";
import { Section } from "../shared/Section";
import { MaxWidth } from "../../../shared/MaxWidth";
import { List } from "../../../shared/List";
import { ListItem } from "../../../shared/ListItem";
import { SectionTitle } from "../shared/SectionTitle";
import { graphql, StaticQuery, useStaticQuery } from "gatsby";

export function Qualifications() {
  const data = useStaticQuery<Queries.QualificationsQuery>(graphql`
    query Qualifications {
      allQualificationsJson {
        edges {
          node {
            id
            value
          }
        }
      }
    }
  `);
  return (
    <Section>
      <MaxWidth>
        <SectionTitle>About Me</SectionTitle>
        <List>
          {data.allQualificationsJson.edges.map(({ node }) => (
            <ListItem key={node.id}>{node.value}</ListItem>
          ))}
        </List>
      </MaxWidth>
    </Section>
  );
}
