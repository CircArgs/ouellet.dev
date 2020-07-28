import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Box, Grid, Grommet } from "grommet";
// import { useMediaPredicate } from "react-media-hook";
import { useMeasure } from "react-use";
import Header from "../header/header";
import Footer from "../footer/footer";
import Theme from "../../theme";
import Stars from "../stars/stars";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../home/home";
import Blog from "../blog/blog";
import BlogPost from "../blogPost/blogPost";

import {
  FalconActor,
  ReaperActor,
  NormandyActor,
  DeathStarActor,
} from "../stars/actors";
const Container = styled(Grid)`
  grid-template-columns: 100vw;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

const GlobalStyle = createGlobalStyle`

*, *:before, *:after{
  padding: 0;
  margin: 0;
  box-sizing: inherit;
  line-height: normal;
  
}

html{
  min-height: 100% !important;
    height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  /* font-size: 1vmin; */

  /* set default font size i.e. 1rem to 62.5% of 16px=10px */
  font-size: 62.5%; 

  ${(props) =>
    props.theme.media.small`
      font-size: 25%;`}

${(props) =>
  props.theme.media.medium`
    font-size: 34.38%;`}

${(props) =>
  props.theme.media.large`
    font-size: 46.88%;`}
  }


  

  /* ${(props) =>
    props.theme.media.xlarge`
      font-size: ${62.5 * 1}%;`} */



*:active{outline:none}

body{
  padding: 0;
    margin: 0;
  /* font-size is still 16px */
  font-size: 1.6rem;
  line-height: 1.5;
 
}

${(props) =>
  props.theme.media.small`
  scrollbar-width: none !important;
  ::-webkit-scrollbar {
    width: 0 !important;
  }`}

  ${(props) =>
    props.theme.media.min.small`
::-webkit-scrollbar {

  z-index: 10000000;
  padding-left:3px;
  width: 12px;
/* height: 10px; */
}

::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment  {
  z-index: 10000000;
height: 0px;
display: block;
background-color: ${props.light};
}

::-webkit-scrollbar-track-piece  {
background-color: ${props.dark};
}

::-webkit-scrollbar-thumb:vertical {
/* height: 50px; */
background-color: ${props.light};
/* border: 1px solid #eee; */
}`}

a, a:visited{
  text-decoration: none !important;
  color: ${(props) => props.theme.global.colors["neutral-3"]} ;
}

`;

const Page = (props) => {
  // const preferredTheme = useMediaPredicate("(prefers-color-scheme: dark)");
  // const [darkMode, setDarkMode] = useState(() => preferredTheme);
  const [darkMode, setDarkMode] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerRef, { height: footerHeight }] = useMeasure();

  return (
    <>
      <Box
        background={darkMode ? "brand" : "brand-invert"}
        align="center"
        direction="column"
        height="100vh"
        width="100vw"
        overflow={{ horizontal: "hidden" }}
      >
        <Grommet theme={Theme}>
          <GlobalStyle
            light={
              darkMode
                ? Theme.global.colors.brand.light
                : Theme.global.colors.brand.dark
            }
            dark={
              darkMode
                ? Theme.global.colors.brand.dark
                : Theme.global.colors.brand.light
            }
          />
          <Container fill>
            <Header
              setHeaderHeight={setHeaderHeight}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />

            <Box
              margin={{ top: headerHeight + "px" }}
              gridArea="main"
              align="center"
              justify="start"
              style={{
                minHeight: `calc(100vh - ${headerHeight + footerHeight}px)`,
                overflow: "auto",
                position: "relative",
              }}
              background={darkMode ? "brand" : "brand-invert"}
            >
              {darkMode ? (
                <Box
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Stars
                    width="100%"
                    height="100%"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    animation={{ type: "fadeIn", duration: 10000 }}
                  >
                    <Box
                      height="calc(100vw + 100vh)"
                      width="calc(100vw + 100vh)"
                      style={{
                        overflow: "hidden",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-25%, -25%) rotateZ(45deg)",
                      }}
                      align="center"
                      justify="center"
                    >
                      <ReaperActor
                        height="3rem"
                        width="3rem"
                        speed="70s"
                        style={{ transform: "rotateZ(-45deg)" }}
                      />
                    </Box>
                    <Box
                      height="calc(100vw + 100vh)"
                      width="calc(100vw + 100vh)"
                      style={{
                        overflow: "hidden",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(30%, -25%) rotateZ(-33deg)",
                      }}
                      align="center"
                      justify="center"
                    >
                      <ReaperActor
                        height="7rem"
                        width="7rem"
                        speed="28s"
                        style={{ transform: "rotateZ(33deg)" }}
                      />
                    </Box>
                    <Box
                      height="calc(100vw + 100vh)"
                      width="calc(100vw + 100vh)"
                      style={{
                        overflow: "hidden",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%) rotateZ(25deg)",
                      }}
                      align="center"
                      justify="center"
                    >
                      <ReaperActor
                        height="6rem"
                        width="6rem"
                        speed="40s"
                        style={{ transform: "rotateZ(-25deg)" }}
                      />
                    </Box>
                    <Box
                      height="calc(100vw + 100vh)"
                      width="calc(100vw + 100vh)"
                      style={{
                        overflow: "hidden",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-70%, -50%) rotateZ(190deg)",
                      }}
                      align="center"
                      justify="center"
                    >
                      <ReaperActor
                        height="2rem"
                        width="2rem"
                        speed="20s"
                        style={{ transform: "rotateZ(-190deg)" }}
                      />
                    </Box>
                    <Box
                      height="calc(100vw + 100vh)"
                      width="calc(100vw + 100vh)"
                      style={{
                        overflow: "hidden",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%) rotateZ(200deg)",
                      }}
                      align="center"
                      justify="center"
                    >
                      <FalconActor
                        height="10rem"
                        width="10rem"
                        speed="30s"
                        distance="5000%"
                        style={{
                          transform: "rotateZ(180deg)",
                          // animationDelay: "5s",
                          // animationTimingFunction: "cubic-bezier(0,1,0,1)",
                        }}
                      />
                    </Box>
                    <Box
                      height="calc(100vw + 100vh)"
                      width="calc(100vw + 100vh)"
                      style={{
                        overflow: "hidden",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%) rotateZ(-80deg)",
                      }}
                      align="center"
                      justify="center"
                    >
                      <NormandyActor
                        height="10rem"
                        width="10rem"
                        speed="25s"
                        distance="5000%"
                        style={{
                          transform: "rotateZ(75deg)",
                          // animationDelay: "5s",
                          // animationTimingFunction: "cubic-bezier(0,1,0,1)",
                        }}
                      />
                    </Box>
                    <Box
                      height="calc(100vw + 100vh)"
                      width="calc(100vw + 100vh)"
                      style={{
                        overflow: "hidden",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-70%, -50%) rotateZ(170deg)",
                      }}
                      align="center"
                      justify="center"
                    >
                      <DeathStarActor
                        height="15rem"
                        width="15rem"
                        speed="60s"
                        distance="5000%"
                        style={{
                          transform: "rotateZ(180deg)",
                          // animationDelay: "5s",
                          // animationTimingFunction: "cubic-bezier(0,1,0,1)",
                        }}
                      />
                    </Box>
                  </Stars>
                </Box>
              ) : null}
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Home
                      darkMode={darkMode}
                      headerHeight={headerHeight}
                      footerHeight={footerHeight}
                      {...props}
                    />
                  )}
                />
                <Route
                  exact
                  path="/blog"
                  render={(props) => (
                    <Blog
                      darkMode={darkMode}
                      headerHeight={headerHeight}
                      footerHeight={footerHeight}
                      {...props}
                    />
                  )}
                />

                <Route
                  exact
                  path="/blog/:issueNumber"
                  render={(props) => (
                    <BlogPost
                      darkMode={darkMode}
                      headerHeight={headerHeight}
                      footerHeight={footerHeight}
                      {...props}
                    />
                  )}
                />
              </Switch>
            </Box>

            <Box gridArea="footer" ref={footerRef}>
              <Footer darkMode={darkMode} />
            </Box>
          </Container>
        </Grommet>
      </Box>
    </>
  );
};

export default Page;
