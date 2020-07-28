import React, { useState, useEffect, useRef } from "react";
import { useWindowSize } from "react-use";
import { HashLink as Link } from "react-router-hash-link";
import {
  Header,
  Box,
  Button,
  ResponsiveContext,
  Menu,
  Nav,
  Anchor,
  Heading,
} from "grommet";
import styled from "styled-components";
import Theme from "../../theme";
import Logo from "../logo/logo";
import {
  Menu as Hamburger,
  Home,
  ContactInfo,
  Article,
  Code,
  Catalog,
} from "grommet-icons";

import { StyledIcon } from "grommet-icons/StyledIcon";

const Sun = styled((props) => (
  <StyledIcon viewBox="0 0 24 24" a11yTitle="Sun" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1C12.5523 1 13 1.44772 13 2V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V2C11 1.44772 11.4477 1 12 1ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V20ZM23 12C23 12.5523 22.5523 13 22 13H20C19.4477 13 19 12.5523 19 12C19 11.4477 19.4477 11 20 11H22C22.5523 11 23 11.4477 23 12ZM4 13C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H4ZM19.7782 4.22189C20.1687 4.61241 20.1687 5.24558 19.7782 5.6361L18.364 7.05031C17.9735 7.44084 17.3403 7.44084 16.9498 7.05031C16.5592 6.65979 16.5592 6.02662 16.9498 5.6361L18.364 4.22189C18.7545 3.83136 19.3877 3.83136 19.7782 4.22189ZM7.05028 18.3639C7.44081 17.9734 7.44081 17.3402 7.05028 16.9497C6.65976 16.5591 6.0266 16.5591 5.63607 16.9497L4.22186 18.3639C3.83133 18.7544 3.83133 19.3876 4.22186 19.7781C4.61238 20.1686 5.24555 20.1686 5.63607 19.7781L7.05028 18.3639ZM4.22189 4.22181C4.61241 3.83129 5.24558 3.83129 5.6361 4.22181L7.05031 5.63602C7.44084 6.02655 7.44084 6.65971 7.05031 7.05024C6.65979 7.44076 6.02662 7.44076 5.6361 7.05024L4.22189 5.63602C3.83136 5.2455 3.83136 4.61233 4.22189 4.22181ZM18.364 16.9498C17.9735 16.5593 17.3403 16.5593 16.9498 16.9498C16.5593 17.3404 16.5593 17.9735 16.9498 18.3641L18.364 19.7783C18.7545 20.1688 19.3877 20.1688 19.7782 19.7783C20.1687 19.3877 20.1687 18.7546 19.7782 18.3641L18.364 16.9498Z"
      fill="#000"
    />
  </StyledIcon>
))`
  &:hover {
    fill: ${(props) => props.theme.global.colors["accent-4"]};
  }
`;
const Moon = styled((props) => (
  <StyledIcon viewBox="0 0 24 24" a11yTitle="Moon" {...props}>
    <path
      d="M18.2494 18.7793L18.7813 19.6261C19.1196 19.4136 19.299 19.0202 19.2375 18.6255C19.1761 18.2308 18.8856 17.9105 18.4988 17.8109L18.2494 18.7793ZM18.2494 5.22068L18.4988 6.18909C18.8856 6.08949 19.1761 5.76921 19.2375 5.37449C19.299 4.97978 19.1196 4.58636 18.7813 4.37388L18.2494 5.22068ZM14 21C15.755 21 17.3954 20.4967 18.7813 19.6261L17.7175 17.9325C16.641 18.6088 15.3677 19 14 19V21ZM5 12C5 16.9706 9.02944 21 14 21V19C10.134 19 7 15.866 7 12H5ZM14 3C9.02944 3 5 7.02944 5 12H7C7 8.13401 10.134 5 14 5V3ZM18.7813 4.37388C17.3954 3.50331 15.755 3 14 3V5C15.3677 5 16.641 5.39124 17.7175 6.06748L18.7813 4.37388ZM18.0001 4.25226C14.5502 5.14052 12 8.27118 12 12H14C14 9.20579 15.911 6.85538 18.4988 6.18909L18.0001 4.25226ZM12 12C12 15.7288 14.5502 18.8595 18.0001 19.7477L18.4988 17.8109C15.911 17.1446 14 14.7942 14 12H12Z"
      fill="#000"
    />
  </StyledIcon>
))`
  &:hover {
    fill: ${(props) => props.theme.global.colors["accent-3"]};
  }
`;

const NavAnchor = styled(Anchor)`
  border: none;
  outline: 0;
  color: ${(props) => props.theme.global.colors["brand-dark"]} !important;
  &:hover {
    color: ${(props) => props.theme.global.colors["accent-1"]} !important;
  }
`;

const links = {
  Home: { path: "/", icon: <Home /> },
  Blog: { path: "/blog", icon: <Article /> },
  Contact: { path: "/#contact", icon: <ContactInfo /> },
  Projects: { path: "/#openSource", icon: <Code /> },
  Resume: {
    href: "https://circargs.github.io/resume/",
    icon: <Catalog />,
  },
};

export default ({ setDarkMode, darkMode, setHeaderHeight }) => {
  const [collapseMenu, setCollapseMenu] = useState(false);
  const { width, height } = useWindowSize();
  const myRef = useRef();
  useEffect(() => {
    if ((myRef != null) & (myRef.current != null)) {
      setHeaderHeight(myRef.current.offsetHeight);
    } else {
      setHeaderHeight(myRef.current.offsetHeight);
    }
  }, [myRef, setHeaderHeight]);
  useEffect(() => {
    if (width < 800) {
      setCollapseMenu(true);
    } else {
      setCollapseMenu(false);
    }
  }, [width]);
  return (
    <Header
      background="brand"
      pad={{ horizontal: "medium" }}
      gridArea="header"
      elevation="hf"
      border={{
        color: darkMode ? "brand-invert" : "transparent",
        size: "medium",
        style: "solid",
        side: "bottom",
      }}
      style={{
        zIndex: 1000000000000000,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
      }}
    >
      <Box ref={myRef} direction="row" align="center" fill>
        <Box align="start" justfiy="center" fill>
          <Logo level={1} style={{ justifySelf: "start" }} />
        </Box>
        <Box direction="row" justify="end" align="center" fill>
          {collapseMenu ? (
            <Menu
              focusIndicator={false}
              dropAlign={{ left: "left", top: "bottom" }}
              margin={{ horizontal: "1rem" }}
              icon={<Hamburger size="large" />}
              items={Object.keys(links).map((k) => ({
                label: (
                  <Box
                    fill
                    key={k}
                    pad=".3rem"
                    align="center"
                    background="brand"
                  >
                    {links[k].href ? (
                      <NavAnchor
                        color="brand"
                        label={k}
                        icon={links[k].icon}
                        href={links[k].href}
                      />
                    ) : (
                      <Link
                        to={links[k].path}
                        scroll={(el) =>
                          el.scrollIntoView({
                            behavior: "smooth",
                          })
                        }
                      >
                        <NavAnchor
                          color="brand"
                          label={k}
                          icon={links[k].icon}
                        />
                      </Link>
                    )}
                  </Box>
                ),
              }))}
            />
          ) : (
            <Nav direction="row" margin={{ right: "1rem" }}>
              {Object.keys(links).map((k, i) => (
                <Box
                  hoverIndicator
                  key={k}
                  // border={{
                  //   color: "brand",
                  //   size: "medium",
                  //   style: "solid",
                  //   side: "bottom",
                  // }}
                >
                  {links[k].href ? (
                    <NavAnchor
                      color="brand"
                      label={k}
                      icon={links[k].icon}
                      href={links[k].href}
                    />
                  ) : (
                    <Link
                      to={links[k].path}
                      scroll={(el) =>
                        el.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    >
                      <NavAnchor color="brand" label={k} icon={links[k].icon} />
                    </Link>
                  )}
                </Box>
              ))}
            </Nav>
          )}

          <Button
            focusIndicator={false}
            margin={{ left: "1rem" }}
            icon={darkMode ? <Sun size="large" /> : <Moon size="large" />}
            onClick={() =>
              setDarkMode((s) => {
                return !s;
              })
            }
          />
        </Box>
      </Box>
    </Header>
  );
};
