import React, { PropsWithChildren } from "react";
import style from "styled-components";
import Github from "../../../../assets/github-icon.svg";
import Email from "../../../../assets/email-icon.svg";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Gradient = style.div`
min-height:100vh;
background: rgb(2,0,36);
background: linear-gradient(126deg, rgba(2,0,36,1) 0%, rgba(9,121,78,1) 35%, rgba(7,61,99,1) 100%);
display: flex;
align-items: center;
justify-content: center;
font-size: 2em;
flex-direction: column;
color: ${(props) => props.theme.text.primaryColor}};
`;

const GradientInside = style.div`
    padding: 4em 2em;
`;

const Name = style.h1`
  font-size:2em;
  font-weight:500;
  margin: 0.125em 0;
  text-align:center;
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

const Coin = style.div`
  width: 256px;
  height: 256px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 0 0 8px rgba(14, 18, 57, 0.5);
  margin-bottom:2rem
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
    <Gradient>
      <GradientInside>
        <Coin>
          <StaticImage src="../../../../images/photo.jpeg" alt="Dan Imbrogno" />
        </Coin>
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
      </GradientInside>
    </Gradient>
  );
};
