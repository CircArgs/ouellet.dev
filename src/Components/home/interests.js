import React, { useState, useEffect, useRef } from "react";

import {
  Heading,
  Text,
  Box,
  Drop,
  Image,
  Avatar,
  Grommet,
  Video,
  Paragraph,
} from "grommet";
import { MailOption, Phone } from "grommet-icons";
import Typewriter from "typewriter-effect";
import Theme from "../../theme";

const Interests = (props) => {
  const [initialHeader, setInitialHeader] = useState(true);
  const [inView, setInView] = useState();

  const ref = useRef();
  useEffect(() => {
    if (ref.current && !inView) {
      let rect = ref.current.getBoundingClientRect();
      setInView(
        window.innerHeight -
          ((rect.top * 2) / 3 + rect.bottom / 3) -
          props.footerHeight >
          0
      );
    }
  }, [props.scrolling]);

  return (
    <Box
      ref={ref}
      id="hobbies"
      pad={{ horizontal: "10rem", vertical: "2.5rem" }}
      width="100vw"
      direction="row"
      justify="center"
      align="center"
      wrap
      height={{ min: props.height + "px" }}
      border={{
        color: "brand",
        size: "medium",
        style: "solid",
        side: "top",
      }}
      style={{ visibility: inView ? "visible" : "hidden" }}
      animation={inView ? { type: "fadeIn", delay: 500, duration: 1500 } : null}
    >
      <Box fill wrap justify="center" align="center">
        <Heading>Interests and Hobbies</Heading>
        <Box>
          <Heading level={3}>Media</Heading>
          <Box>
            <Text>Favorite Game: Mass Effect 2</Text>
          </Box>
          <Box>
            <Text>Favorite Movie: Ex Machina</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Interests;
