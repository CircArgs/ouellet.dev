import React from "react";
import { useWindowSize } from "react-use";
import { Github, StackOverflow, Linkedin, Mail } from "grommet-icons";
import Logo from "../logo/logo";
import { Anchor, Box, Footer, Text } from "grommet";

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      a11yTitle="Reach me on Github"
      href="https://github.com/CircArgs"
      icon={<Github color="brand" />}
    />
    <Anchor
      a11yTitle="Reach me on StackOverFlow"
      href="https://stackoverflow.com/users/7907717/circargs"
      icon={<StackOverflow color="brand" />}
    />{" "}
    <Anchor
      a11yTitle="Reach me on LinkedIn"
      href="https://www.linkedin.com/in/nicholas-ouellet"
      icon={<Linkedin color="brand" />}
    />
    <Anchor
      a11yTitle="Reach me by Email"
      href="mailto:nicholas.p.ouellet@gmail.com"
      icon={<Mail color="brand" />}
    />
  </Box>
);

const MyFooter = ({ darkMode, ...props }) => {
  const { width } = useWindowSize();
  return (
    <Footer
      style={{
        minHeight: "10rem",
      }}
      border={{
        color: darkMode ? "brand-invert" : "transparent",
        size: "medium",
        style: "solid",
        side: "top",
      }}
      background="brand"
      pad="small"
      elevation="hf"
    >
      <Box fill>
        {width < 500 ? (
          <Box fill align="center" justify="center" gap="xsmall">
            <Media />
            <Logo text="N.O." />
            <Text textAlign="center" size="xsmall" margin="auto">
              Designed & Built By Nick Ouellet; Copyright ©{" "}
              {new Date().getFullYear()} All Rights Reserved
            </Text>
          </Box>
        ) : (
          <>
            <Box style={{ position: "relative" }}>
              <Box
                align="center"
                direction="row"
                gap="xsmall"
                style={{
                  position: "absolute",
                  left: "3rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <Box margin="medium">
                  <Logo text="N.O." />
                </Box>
              </Box>

              <Media />
            </Box>

            <Text textAlign="center" size="xsmall" margin="auto">
              Designed & Built By Nick Ouellet; Copyright ©{" "}
              {new Date().getFullYear()} All Rights Reserved
            </Text>
          </>
        )}
      </Box>
    </Footer>
  );
};

export default MyFooter;
