import React, { useState } from "react";
import { List } from "../../../shared/List";
import { ListItem } from "../../../shared/ListItem";
import style from "styled-components";
import { useSpring, animated, useScroll } from "@react-spring/web";
import useScrollTo from "react-spring-scroll-to-hook";

const height = 85;

const MenuButton = style.a`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  display: block;
  font-weight: 400;
  color: ${(props) => props.theme.text.primaryColor};
  text-decoration: none;
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    font-size: 0.825rem;
    padding: 0.25rem .5rem;
  }
`;

export function Menu() {
  const [activePage, setActivePage] = useState(-1);
  const [menuStyle, menuStyleApi] = useSpring(() => ({
    opacity: 0,
  }));

  const { scrollTo } = useScrollTo({});

  const menuItems = [
    {
      name: "About Me",
      id: "about-me",
    },
    {
      name: "Experience",
      id: "experience",
    },
    {
      name: "Education",
      id: "education",
    },
    {
      name: "Technologies",
      id: "technologies",
    },
  ];

  const determineActivePage = (scrollY: number) => {
    menuItems.findIndex((item, index) => {
      const element = document.getElementById(item.id);
      if (element) {
        const top = element.offsetTop;
        if (top - height - 20 - scrollY <= 0) {
          setActivePage(index);
        }
      }
    });
  };

  useScroll({
    onChange: (val) => {
      determineActivePage(val.value.scrollY);
      if (val.value.scrollY > 10) {
        menuStyleApi.start({ opacity: 1 });
      } else {
        menuStyleApi.start({ opacity: 0 });
      }
    },
  });

  const handleClick = (selector: string) => () => {
    scrollTo(document.getElementById(`${selector.slice(1)}`), -1 * height + 1);
  };

  const activeStyle = (index: number) =>
    index === activePage
      ? {
          borderBottom: "1px solid #fff",
        }
      : {};

  return (
    <animated.div
      style={{
        backgroundColor: menuStyle.opacity.to((v) => `rgba(35,23,40,${v})`),
        position: "fixed",
        height: height,
        width: "100%",
        zIndex: 99,
        padding: "0 2em",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <List direction="row">
        {menuItems.map((item, index) => (
          <ListItem key={item.id}>
            <MenuButton
              style={activeStyle(index)}
              onClick={handleClick(`#${item.id}`)}
            >
              {item.name}
            </MenuButton>
          </ListItem>
        ))}
      </List>
    </animated.div>
  );
}
