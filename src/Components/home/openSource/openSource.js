import React, { useState, useEffect, useRef } from "react";
import { useAsync } from "react-use";
import { Github } from "grommet-icons";
import { Heading, Text, Box, Anchor, Paragraph, Button } from "grommet";
import Loading from "../../loading/loading";
import Card from "./card";
import HyperSpace from "../../stars/hyperspace";
import { getProjects } from "./graphql";

const OpenSource = (props) => {
  const [inView, setInView] = useState();
  const { loading, value } = useAsync(async () => {
    return await getProjects();
  }, []);
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
    <div>
      <Box
        fill
        style={{
          visibility: inView ? "visible" : "hidden",
        }}
        border={{
          color: "brand",
          size: "medium",
          style: "solid",
          side: "top",
        }}
        animation={inView ? { type: "fadeIn", delay: 0, duration: 2000 } : null}
      >
        <Box
          ref={ref}
          id="openSource"
          pad={{ horizontal: "2rem", vertical: "2.5rem" }}
          height={{ min: props.height + "px" }}
          justify="center"
          align="center"
          fill
          wrap
          animation={
            inView ? { type: "slideLeft", delay: 0, duration: 2000 } : null
          }
        >
          <Heading margin={{ top: "medium", bottom: "large" }}>
            Open Source Works
          </Heading>
          <Box direction="row" align="center" justify="around" wrap>
            {loading ? (
              <Loading />
            ) : (
              <>
                {value == null
                  ? null
                  : value.data.user.pinnedItems.edges.map(
                      ({ node: project }) => {
                        // console.log(project);
                        return (
                          <Anchor
                            href={project.url}
                            // style={{ border: "none", outline: 0, boxShadow: "none" }}
                          >
                            <Card
                              margin="medium"
                              key={project.name}
                              background={
                                props.darkMode ? "transparent" : "brand-light"
                              }
                              align="center"
                              justify="center"
                              height="25rem"
                              width="35rem"
                              style={{
                                position: "relative",
                                borderRadius: "10px",
                              }}
                              border={{
                                color: "brand",
                                size: "xsmall",
                                style: "solid",
                                side: "all",
                              }}
                              elevation={!props.darkMode ? "wideMed" : null}
                              darkMode={props.darkMode}
                            >
                              <HyperSpace
                                fill
                                className="fade"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  zIndex: 1,
                                }}
                              ></HyperSpace>

                              <Box
                                fill
                                align="center"
                                justify="around"
                                style={{ zIndex: 3 }}
                                margin={{ horizontal: "small" }}
                              >
                                <Heading level={3} textAlign="center">
                                  {project.name}
                                </Heading>
                                <Paragraph
                                  textAlign="center"
                                  style={{ fontStyle: "italic" }}
                                >
                                  {project.description != null
                                    ? project.description.length > 60
                                      ? project.description.slice(0, 60) + "..."
                                      : project.description
                                    : ""}
                                </Paragraph>
                                <Box
                                  direction="row"
                                  width="100%"
                                  justify="center"
                                  align="center"
                                >
                                  <Box
                                    height="1rem"
                                    width="1rem"
                                    style={{ borderRadius: "1000px" }}
                                    margin={{ right: "1rem" }}
                                    background={project.primaryLanguage.color}
                                  ></Box>
                                  <Text size="xsmall">
                                    {project.primaryLanguage.name}
                                  </Text>
                                </Box>
                              </Box>
                            </Card>
                          </Anchor>
                        );
                      }
                    )}
                <Box
                  width="35rem"
                  height="25rem"
                  align="center"
                  justify="center"
                >
                  <Button
                    label={<Text color="brand">See More &#8680;</Text>}
                    icon={<Github color="brand" />}
                    href="https://github.com/CircArgs"
                  ></Button>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default OpenSource;
