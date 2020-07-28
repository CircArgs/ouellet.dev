import React, { useState, useEffect, useRef } from "react";
import { useMin } from "../../Utils/cssMath";
import { Heading, Box, Drop } from "grommet";
import Theme from "../../theme";
import {
  DiRust,
  DiPython,
  DiCss3,
  DiHtml5,
  DiSass,
  DiGithubFull,
  DiSpark,
  DiMongodb,
  DiJavascript1,
  DiTerminal,
} from "react-icons/di";

import { GrGraphQl, GrDocker } from "react-icons/gr";
import { FaReact, FaDatabase, FaAws, FaNode } from "react-icons/fa";

const skills = {
  Rust: DiRust,
  Python: DiPython,
  Javascript: DiJavascript1,
  React: FaReact,
  Css: DiCss3,
  Html: DiHtml5,
  Docker: GrDocker,
  Node: FaNode,
  Sass: DiSass,
  Github: DiGithubFull,
  Aws: FaAws,
  Spark: DiSpark,
  Sql: FaDatabase,
  Mongodb: DiMongodb,
  GraphQl: GrGraphQl,
  Shell: DiTerminal,
};

const Skill = ({ animation, ...props }) => {
  const [over, setOver] = useState();
  const ref = useRef();

  // useEffect(() => {
  //   setTimeout(() => setOver(false), 2000);
  // }, []);

  return (
    <Box
      margin="small"
      align="center"
      justify="center"
      height={{ min: props.height }}
      animation={animation}
    >
      <Box
        ref={ref}
        onMouseOver={() => {
          setOver(true);
        }}
        onMouseOut={() => {
          setOver(false);
          // setTimeout(() => setOver(false), 100);
        }}
      >
        {React.Children.map(props.children, (child) => {
          let color = props.darkMode
            ? Theme.global.colors["brand-dark"]
            : Theme.global.colors["brand-light"];
          return React.cloneElement(child, {
            color: over ? Theme.global.colors["accent-1"] : color,
          });
        })}
      </Box>

      {ref.current && over && (
        <Drop align={{ top: "bottom" }} target={ref.current} plain>
          <Box
            margin="xsmall"
            pad="small"
            background="brand"
            // round={{ size: "medium", corner: "left" }}
          >
            {props.label}
          </Box>
        </Drop>
      )}
    </Box>
  );
};

const Skills = (props) => {
  const [inView, setInView] = useState();
  const ref = useRef();
  const skillsWidth = useMin("100vw", "60rem");
  useEffect(() => {
    if (ref.current && !inView) {
      let rect = ref.current.getBoundingClientRect();
      setInView(
        window.innerHeight - (rect.top + rect.bottom) / 2 - props.footerHeight >
          0
      );
    }
  }, [props.scrolling]);

  return (
    <div>
      <Box
        ref={ref}
        id="skills"
        pad={{ horizontal: "3rem", vertical: "1.5rem" }}
        width="100vw"
        height={{ min: props.height + "px" }}
        border={{
          color: "brand",
          size: "medium",
          style: "solid",
          side: "top",
        }}
        direction="row"
        justify="center"
        align="center"
        wrap
        style={{ visibility: inView ? "visible" : "hidden" }}
        animation={
          inView ? { type: "fadeIn", delay: 250, duration: 2000 } : null
        }
      >
        {inView ? (
          <>
            {" "}
            <Box width={`calc(${skillsWidth} - 10rem)`} margin="small">
              <Box margin={{ horizontal: "auto" }}>
                <Heading>Skills</Heading>
                <Box
                  animation={{
                    type: "fadeIn",
                    delay: 1000,
                    duration: 1000,
                  }}
                  // align="center"
                >
                  <Box
                    border={{
                      color: "brand",
                      size: "medium",
                      style: "solid",
                      side: "bottom",
                    }}
                    style={{ display: "inline" }}
                    animation={{
                      type: "slideRight",
                      delay: 1000,
                      size: "xlarge",
                      duration: 2000,
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
            <Box
              width={skillsWidth}
              wrap
              margin="small"
              direction="row"
              justify="center"
              align="center"
              as="ul"
            >
              <Box
                animation={{
                  type: "fadeIn",
                  delay: 3000,
                  duration: 200,
                  size: "xlarge",
                }}
              >
                <Box
                  animation={{
                    type: "zoomOut",
                    delay: 3000,
                    duration: 300,
                    size: "xlarge",
                  }}
                >
                  <li style={{ textAlign: "center" }}>
                    Develop predicitve models from GLMs to boosted trees to deep
                    neural networks for image analytics and natural language
                  </li>
                </Box>
              </Box>

              <Box
                animation={{
                  type: "fadeIn",
                  delay: 4000,
                  duration: 200,
                  size: "xlarge",
                }}
              >
                <Box
                  animation={{
                    type: "zoomOut",
                    delay: 4000,
                    duration: 300,
                    size: "xlarge",
                  }}
                >
                  <li style={{ textAlign: "center" }}>
                    Deployment predictive models with real time scoring web
                    services
                  </li>
                </Box>
              </Box>

              <Box
                animation={{
                  type: "fadeIn",
                  delay: 5000,
                  duration: 200,
                  size: "xlarge",
                }}
              >
                <Box
                  animation={{
                    type: "zoomOut",
                    delay: 5000,
                    duration: 300,
                    size: "xlarge",
                  }}
                >
                  <li style={{ textAlign: "center" }}>
                    Develop tested software tooling
                  </li>
                </Box>
              </Box>
            </Box>
            <Box
              width={skillsWidth}
              wrap
              direction="row"
              justify="center"
              align="center"
              margin="small"
            >
              {Object.keys(skills).map((skill, i) => {
                const Component = skills[skill];
                return (
                  <Skill
                    animation={{
                      type: "fadeIn",
                      duration: 100,
                      delay: 5000 + i * 90,
                    }}
                    darkMode={props.darkMode}
                    key={skill}
                    label={skill}
                  >
                    <Component size="4rem" />
                  </Skill>
                );
              })}
            </Box>
          </>
        ) : null}
      </Box>
    </div>
  );
};

export default Skills;
