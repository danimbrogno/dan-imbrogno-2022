import * as React from "react";
import { MaxWidth } from "../../../../shared/MaxWidth";
import { List } from "../../../../shared/List";
import { ListItem } from "../../../../shared/ListItem";
import { SectionTitle } from "../../shared/SectionTitle";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { TechnologyItem } from "./components/TechnologyItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #b0b0b0;
  border-top: 20px solid #828282;
  padding: 3em 2em;
  color: #fff;
`;

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
    <Container id="technologies">
      <MaxWidth>
        <SectionTitle>Technologies</SectionTitle>
        <List>
          {data.allTechnologiesJson.edges.map(({ node }) => (
            <ListItem key={node.name}>
              <TechnologyHeader>{node.name}</TechnologyHeader>
              <List direction="row">
                {(node.values || []).map((a, index) => (
                  <ListItem>
                    <TechnologyItem index={index} item={a?.value || ""} />
                  </ListItem>
                ))}
              </List>
            </ListItem>
          ))}
        </List>
      </MaxWidth>
    </Container>
  );
}
