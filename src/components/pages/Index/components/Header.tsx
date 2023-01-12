import React from "react";
import style from "styled-components";
import Github from "../../../../assets/github-icon.svg";
import Email from "../../../../assets/email-icon.svg";
import Cabin from "../../../../images/cabin.svg";
import { graphql, useStaticQuery } from "gatsby";
import { List } from "../../../shared/List";
import { ListItem } from "../../../shared/ListItem";

const Banner = style.div`
height: 100vh;
width: 100vw;
background: #000 url(${Cabin}) no-repeat 100% 0%;
background-size: cover;
display: flex;
align-items: flex-start;
justify-content: center;
font-size: 2em;
flex-direction: column;
color: ${(props) => props.theme.text.primaryColor}};
@media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
  align-items: center;
  background: #000 url(${Cabin}) no-repeat 90% 0%;
  background-size: cover;
}
`;

const Content = style.div`
@media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
  margin: 0 auto;
  width: 50%;
}
@media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
  margin: 0 auto;
  width: 90%;
  top:0;
  }
  width: 40%;
  margin-left:80px;
  position: relative;
  top: -240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Name = style.h1`
  font-size:2em;
  font-weight:500;
  margin: 0.125em 0;
  text-align:center;
  white-space: nowrap;
  `;
const Description = style.div`
  font-size: 0.7em;
  margin: 0.25em 0;
  text-align:center;
`;
const Buttons = style.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin:0.125em 0;
`;
const Button = style.a`
  display: flex;
  height:64px;
  width:64px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Header: React.FC = () => {
  const data = useStaticQuery<Queries.HeaderQuery>(graphql`
    query Header {
      site {
        siteMetadata {
          title
          description
          email
          github
        }
      }
    }
  `);

  const mailToLink = data.site?.siteMetadata?.email
    ? `mailto:${data.site.siteMetadata.email}`
    : "";

  const githubLink = data.site?.siteMetadata?.github
    ? `https://github.com/${data.site.siteMetadata.github}`
    : "";

  return (
    <Banner>
      <Content>
        <Name>{data.site?.siteMetadata?.title}</Name>
        <Description>{data.site?.siteMetadata?.description}</Description>
        <Buttons>
          <Button href={mailToLink}>
            <Email height="64" width="64" fill="white" />
          </Button>
          <Button href={githubLink}>
            <Github height="44" width="44" fill="white" />
          </Button>
        </Buttons>
      </Content>
    </Banner>
  );
};
