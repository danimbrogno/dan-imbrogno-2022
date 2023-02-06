import React from "react";
import style from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = style.div`
  z-index: 99999;
`;

const Coin = style.div`
  width: 256px;
  height: 256px;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  border: 8px solid rgba(14, 18, 57, 0.5);
`;

export function PhotoCoin() {
  return (
    <Wrapper>
      <Coin>
        <StaticImage
          src="../../../../../../images/photo.jpeg"
          alt="Dan Imbrogno"
        />
      </Coin>
    </Wrapper>
  );
}
