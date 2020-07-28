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

const Contact = (props) => {
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
      id="contact"
      pad={{ horizontal: "10rem", vertical: "2.5rem" }}
      width="100vw"
      direction="row"
      justify="center"
      align="start"
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
      <>
        {inView ? (
          <Box justify="center" align="center">
            <>
              {initialHeader ? (
                <Heading textAlign="center">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(70)
                        .pauseFor(500)
                        .typeString("Questions?")
                        .pauseFor(500)
                        .deleteAll()
                        .typeString("Comments?")
                        .pauseFor(500)
                        .deleteAll()
                        .typeString("Get in Touch.")
                        .pauseFor(500)
                        .callFunction(() => setInitialHeader(false))
                        .start();
                    }}
                  />
                </Heading>
              ) : (
                <Heading>Get in Touch.</Heading>
              )}
            </>
            <Box
              margin="large"
              align="center"
              animation={{ type: "fadeIn", delay: 6750 }}
            >
              <Box direction="row">
                <Phone size="medium" />
                <Paragraph margin={{ horizontal: "small" }}>
                  {" "}
                  (860) 591-9646
                </Paragraph>
              </Box>
              <Box direction="row">
                <MailOption size="medium" />
                <Paragraph margin={{ horizontal: "small" }}>
                  {" "}
                  Nicholas.P.Ouellet@gmail.com
                </Paragraph>
              </Box>
            </Box>
          </Box>
        ) : null}
      </>
    </Box>
  );
};

export default Contact;
