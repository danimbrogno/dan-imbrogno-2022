import React from "react";
import { Parallax } from "react-scroll-parallax";
import Github from "../../../../assets/github-icon.svg";
import Email from "../../../../assets/email-icon.svg";
import GradientImg from "../../../../images/header-layer1.svg";
import Stars1Img from "../../../../images/header-layer2.svg";
import Stars2Img from "../../../../images/header-layer3.svg";
import MoonImg from "../../../../images/header-layer4.svg";
import SceneryImg from "../../../../images/header-layer5.svg";
import CabinImg from "../../../../images/header-layer6.svg";
import style from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const Banner = style.div`
  min-height:480px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 2em;
  flex-direction: column;
  color: ${(props) => props.theme.text.primaryColor}};
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    align-items: center;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Name = style.h1`
  font-size:2em;
  font-weight:500;
  margin: 0.125em 0 0.125em 0;
  text-align:center;
  white-space: nowrap;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
   font-size:1.5em;
  }
  `;
const Description = style.div`
  font-size: 0.8em;
  line-height:1.75em;
  margin: 0.25em 0;
  text-align:center;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    font-size:0.6em;
   }
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

const MoonDiv = style.div`
    position: absolute;
    background-image: url(${MoonImg});
    background-position: top right -15%;
    background-size: 160px 160px;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    @media (min-width: ${(props) => props.theme.breakPoints.mobileL}px) {
      background-position: top right 0;
      background-size: 200px 200px;
    }
    @media (min-width: ${(props) => props.theme.breakPoints.tablet}px) {
    background-size: 240px 240px;
  }
`;

const SceneryDiv = style.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-image: url(${SceneryImg});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const CabinDiv = style.div`
  position: absolute;
  top: 20px;
  left: 0;
  background-image: url(${CabinImg});
  background-position: bottom right 25%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  @media (min-width: ${(props) => props.theme.breakPoints.mobileL}px) {
    background-position: bottom right 0%;
  }
`;

export const Header = () => {
  const data = useStaticQuery<Queries.HeaderDataQuery>(graphql`
    query HeaderData {
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
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${GradientImg})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Parallax
        speed={-10}
        style={{ height: "100vh", position: "absolute", top: 0 }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundImage: `url(${Stars1Img})`,
            backgroundSize: "cover",
            width: "100vw",
            height: "100vh",
          }}
        />
      </Parallax>
      <Parallax
        speed={-8}
        style={{ height: "100vh", position: "absolute", top: 0 }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundImage: `url(${Stars2Img})`,
            backgroundSize: "cover",
            width: "100vw",
            height: "100vh",
          }}
        />
      </Parallax>
      <Parallax
        speed={-6}
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: 0,
        }}
      >
        <MoonDiv />
      </Parallax>
      <Parallax
        speed={-4}
        style={{ height: "100vh", position: "absolute", top: 0 }}
      >
        <SceneryDiv />
      </Parallax>
      <Parallax
        speed={0}
        style={{ height: "100vh", position: "absolute", top: 0 }}
      >
        <CabinDiv />
      </Parallax>
      <Parallax
        speed={-12}
        style={{ height: "100vh", position: "absolute", top: 0 }}
      >
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
      </Parallax>
    </div>
  );
};
