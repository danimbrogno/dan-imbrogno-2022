import * as React from "react";
import { Section } from "../../shared/Section";
import { MaxWidth } from "../../../../shared/MaxWidth";
import { List } from "../../../../shared/List";
import { ListItem } from "../../../../shared/ListItem";
import { SectionTitle } from "../../shared/SectionTitle";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const TechnologyHeader = styled.h4`
  font-size: 1.125rem;
`;
export function Technologies() {
  const data = useStaticQuery<Queries.TechnologiesQuery>(graphql`
    query Technologies {
      allTechnologiesJson {
        edges {
          node {
            name
            values {
              value
            }
          }
        }
      }
    }
  `);
  return (
    <Section>
      <MaxWidth>
        <SectionTitle>Technologies</SectionTitle>
        <List>
          {data.allTechnologiesJson.edges.map(({ node }) => (
            <ListItem key={node.name}>
              <TechnologyHeader>{node.name}</TechnologyHeader>
              {(node.values || []).map((a) => a?.value || "").join(", ")}
            </ListItem>
          ))}
        </List>
      </MaxWidth>
    </Section>
  );
}
