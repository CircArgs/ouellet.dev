import React, { useState, useEffect } from "react";
import { Heading, Text, Box, Video } from "grommet";
import { useWindowSize } from "react-use";
import Typewriter from "typewriter-effect";
import portrait from "../../Assets/Img/painting/sped/output_s_30.mp4";
import portraitPoster from "../../Assets/Img/painting/sped/poster.png";
const Intro = (props) => {
  const [initialHeader, setInitialHeader] = useState(true);
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [pulsing, setPulsing] = useState(true);
  useEffect(() => {
    setTimeout(() => setPulsing(false), 8750);
  }, []);
  let portraitDim = 0.33 * windowWidth;
  let textWidth = 0.4 * windowWidth;
  let textHeight = props.height;
  if (windowWidth < windowHeight) {
    portraitDim = 0.33 * props.height;
    textWidth = windowWidth;
    textHeight = 0.5 * props.height;
  }
  return (
    <div>
      <Box
        id="Nick"
        pad={{ horizontal: "5rem" }}
        width="100vw"
        height={{ min: props.height + "px" }}
        // border={{
        //   color: "brand",
        //   size: "medium",
        //   style: "solid",
        //   side: "bottom",
        // }}
        direction="row"
        justify="center"
        align="center"
        wrap
      >
        <Box
          justify="center"
          align="center"
          width={portraitDim * 1.33 + "px"}
          height={textHeight + "px"}
        >
          <Box
            width={portraitDim + "px"}
            height={portraitDim + "px"}
            style={{
              minWidth: portraitDim + "px",
              borderRadius: "1000rem",
              position: "relative",
            }}
            margin="2.5rem"

            // elevation="xlarge"
          >
            <Box
              elevation="xlarge"
              style={{
                position: "absolute",
                width: pulsing
                  ? portraitDim - 0.1 * portraitDim + "px"
                  : portraitDim + "px",
                height: pulsing
                  ? portraitDim - 0.1 * portraitDim + "px"
                  : portraitDim + "px",
                top: pulsing ? 0.5 * 0.1 * portraitDim + "px" : 0,
                left: pulsing ? 0.5 * 0.1 * portraitDim + "px" : 0,
                opacity: "70%",
                borderRadius: "1000rem",
              }}
              animation={pulsing ? "pulse" : null}
            ></Box>
            <Box style={{ overflow: "hidden", borderRadius: "1000rem" }} fill>
              <Box
                width={portraitDim + "px"}
                height={portraitDim + "px"}
                a11yTitle="ignore_spaceholder"
                style={{
                  zIndex: 2,
                  background: "transparent",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              ></Box>
              <Video
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
                width={portraitDim + "px"}
                height={portraitDim + "px"}
                controls={false}
                muted
                autoPlay
                playsInline
                fit="cover"
                poster={portraitPoster}
              >
                <source key="video" src={portrait} type="video/mp4" />
              </Video>
            </Box>
          </Box>
        </Box>
        <Box
          margin="auto"
          style={{ position: "relative" }}
          // animation={{ type: "fadeIn", duration: "9000" }}
        >
          <Box
            width={textWidth + "px"}
            height={textHeight + "px"}
            justify="center"
            align="center"
          >
            {initialHeader ? (
              <Heading textAlign="center" level={1}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(70)
                      .typeString("Data Scientist?")
                      .pauseFor(850)
                      .deleteAll()
                      .typeString("Developer?")
                      .pauseFor(850)
                      .deleteAll()
                      .typeString("Data Scientist & Developer!")
                      .pauseFor(750)
                      .callFunction(() => setInitialHeader(false))
                      .start();
                  }}
                />
              </Heading>
            ) : (
              <Heading textAlign="center" level={1}>
                Data Scientist & Developer!
              </Heading>
            )}

            {!initialHeader ? (
              <Box width="100%" margin={{ top: "2rem" }}>
                <Text size="large">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(45)
                        .typeString(
                          `I am a full-stack data scientist and developer. I build vision and natural language models using Python, create web applications (like this very page) in Javascript with React, HTML + CSS, and write low-level code in Rust.`
                        )

                        .start();
                    }}
                  />
                </Text>
              </Box>
            ) : null}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Intro;
