import * as React from "react";
import { WorkItem } from "./components/WorkItem";
import { List } from "../../../../shared/List";
import { ListItem } from "../../../../shared/ListItem";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { SectionTitle } from "../../../../shared/SectionTitle";
import { MaxWidth } from "../../../../shared/MaxWidth";
import { Parallax } from "react-scroll-parallax";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #421c62;
  border-top: 20px solid #170923;
  padding: 3em 2em;
  color: #fff;
`;

export const Work: React.FC = () => {
  const data = useStaticQuery<Queries.WorkDataQuery>(graphql`
    query WorkData {
      site {
        siteMetadata {
          title
          description
          email
          github
        }
      }
      allQualificationsJson {
        edges {
          node {
            id
            value
            icon {
              publicURL
            }
          }
        }
      }
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
    <Parallax id="experience" speed={0}>
      <Container>
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
    </Parallax>
  );
};
