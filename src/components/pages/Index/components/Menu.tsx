import React, { useEffect, useState } from "react";
import { List } from "../../../shared/List";
import { ListItem } from "../../../shared/ListItem";
import style from "styled-components";
import { animated, useSpring, useScroll } from "@react-spring/web";

const MenuContainer = style.div`
    position: fixed;
    width: 100%;
    z-index: 99;
`;

const MenuPad = style.div`
    padding: 2rem 1rem;
`;

const MenuButton = style.a`
  font-size: 1rem;
  padding: 0 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.text.primaryColor};
  text-decoration: none;
`;
export function Menu() {
  const [menuStyle, menuStyleApi] = useSpring(() => ({
    opacity: 0,
  }));

  useScroll({
    onChange: (val) => {
      if (val.value.scrollY > 10) {
        menuStyleApi.start({ opacity: 1 });
      } else {
        menuStyleApi.start({ opacity: 0 });
      }
    },
  });

  return (
    <MenuContainer>
      <animated.div
        style={{
          backgroundColor: menuStyle.opacity.to((v) => `rgba(35,23,40,${v})`),
        }}
      >
        <MenuPad>
          <List direction="row">
            <ListItem>
              <MenuButton href="#">About Me</MenuButton>
            </ListItem>
            <ListItem>
              <MenuButton href="#">Experience</MenuButton>
            </ListItem>
            <ListItem>
              <MenuButton href="#">Education</MenuButton>
            </ListItem>
            <ListItem>
              <MenuButton href="#">Technologies</MenuButton>
            </ListItem>
          </List>
        </MenuPad>
      </animated.div>
    </MenuContainer>
  );
}
