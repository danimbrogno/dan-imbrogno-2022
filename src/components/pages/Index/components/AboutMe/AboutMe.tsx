import React from "react";
import style from "styled-components";
import Gradient from "../../../../../images/gradient.svg";
import { PhotoCoin } from "./components/PhotoCoin";
import { Parallax } from "react-scroll-parallax";
import { graphql, useStaticQuery } from "gatsby";

const Section = style.div`
  background-image: url(${Gradient});
  background-size: cover;
  position: relative;
  padding: 3em;
`;

const Qualifications = style.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  `;

const Qualification = style.div`
  font-size: 1.25rem;
  text-align: center;
  flex: 1 0 33.333%;
  @media (max-width: ${(props) => props.theme.breakPoints.mobileL}px) {
    flex-basis: 100%;
  }
  max-width: 320px;
  margin: 0 auto;
  margin-top: 40px;
`;

const Text = style.p`
  display: block;
  color: ${(props) => props.theme.text.primaryColor};
  padding: 1em 1em 2em 1em;
`;

const Icon = style.img`
  max-width:128px;
  margin: 10px;
`;

export const AboutMe: React.FC = () => {
  const data = useStaticQuery<Queries.AboutMeDataQuery>(graphql`
    query AboutMeData {
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
    }
  `);

  return (
    <Parallax id="about-me" speed={0}>
      <Section>
        <PhotoCoin />
        <Qualifications>
          {data.allQualificationsJson.edges.map(({ node }) => (
            <Qualification key={node.id}>
              {node.icon?.publicURL && <Icon src={node.icon.publicURL} />}
              <Text>{node.value}</Text>
            </Qualification>
          ))}
        </Qualifications>
      </Section>
    </Parallax>
  );
};
