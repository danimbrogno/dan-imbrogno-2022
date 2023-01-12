import React from "react";
import { List } from "../../../shared/List";
import { ListItem } from "../../../shared/ListItem";
import style from "styled-components";
import { animated, useSpring, useScroll } from "@react-spring/web";
import useScrollTo from "react-spring-scroll-to-hook";

const height = 85;
const MenuContainer = style.div`
    position: fixed;
    width: 100%;
    z-index: 99;
    height: ${height}px;
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

  const { scrollTo } = useScrollTo();

  const handleClick = (selector: string) => () => {
    scrollTo(document.querySelector(selector), -1 * height + 1);
  };

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
              <MenuButton onClick={handleClick("#about-me")} href="#about-me">
                About Me
              </MenuButton>
            </ListItem>
            <ListItem>
              <MenuButton
                onClick={handleClick("#experience")}
                href="#experience"
              >
                Experience
              </MenuButton>
            </ListItem>
            <ListItem>
              <MenuButton onClick={handleClick("#education")} href="#education">
                Education
              </MenuButton>
            </ListItem>
            <ListItem>
              <MenuButton
                onClick={handleClick("#technologies")}
                href="#technologies"
              >
                Technologies
              </MenuButton>
            </ListItem>
          </List>
        </MenuPad>
      </animated.div>
    </MenuContainer>
  );
}
