import React, { useState, useEffect, useRef } from "react";
import { useAsync } from "react-use";
import { Article } from "grommet-icons";
import { HashLink as Link } from "react-router-hash-link";
import { Heading, Text, Box, Anchor, Paragraph, Button } from "grommet";
import Loading from "../../loading/loading";
import Card from "../openSource/card";
import HyperSpace from "../../stars/hyperspace";
import { getBlogs } from "../../blog/graphql";

const OpenSource = (props) => {
  const [inView, setInView] = useState();
  const { loading, value } = useAsync(async () => {
    return await getBlogs();
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
        ref={ref}
        id="openSource"
        pad={{ horizontal: "2rem", vertical: "1.5rem" }}
        height={{ min: props.height + "px" }}
        justify="center"
        align="center"
        fill
        wrap
        border={{
          color: "brand",
          size: "medium",
          style: "solid",
          side: "top",
        }}
        style={{
          visibility: inView ? "visible" : "hidden",
        }}
        animation={inView ? { type: "fadeIn", delay: 0, duration: 2000 } : null}
      >
        <Box
          align="center"
          justify="center"
          margin={{ top: "medium", bottom: "large" }}
        >
          <Heading>My Blogs</Heading>
          <Text>
            See some of the data science and development topics I've written
            about.
          </Text>
        </Box>
        <Box direction="row" align="center" justify="around" wrap>
          {loading ? (
            <Box
              direction="column"
              margin="medium"
              align="center"
              justify="center"
            >
              <Loading />
              <Box margin="medium" animation="pulse">
                Loading...
              </Box>
            </Box>
          ) : (
            <>
              {value == null
                ? null
                : value.data.repository.issues.nodes.map((post) => {
                    return (
                      <Link to={`/blog/${post.number}`}>
                        <Anchor
                          style={{
                            border: "none",
                            outline: 0,
                            boxShadow: "none",
                          }}
                        >
                          <Card
                            margin="medium"
                            key={post.title}
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
                              overflow: "hidden",
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
                              height="44rem"
                              width="50rem"
                              className="fade"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 1,
                                transform:
                                  "rotateZ(45deg) translate(-15%, -15%)",
                              }}
                            ></HyperSpace>

                            <Box
                              fill
                              align="center"
                              justify="around"
                              margin={{ horizontal: "small" }}
                              style={{ zIndex: 3 }}
                            >
                              <Heading level={3} textAlign="center">
                                {post.title}
                              </Heading>
                              <Paragraph
                                textAlign="center"
                                style={{ fontStyle: "italic" }}
                              >
                                {post.bodyText != null
                                  ? post.bodyText.length > 60
                                    ? post.bodyText.slice(0, 60) + "..."
                                    : post.bodyText
                                  : ""}
                              </Paragraph>
                              <Box
                                direction="row"
                                width="100%"
                                justify="center"
                                align="center"
                              >
                                {post.labels.nodes.map(({ name, color }) =>
                                  name === "blog" ? null : (
                                    <Box
                                      key={name}
                                      // width="10rem"
                                      // height="3rem"
                                      pad="small"
                                      style={{ borderRadius: "5px" }}
                                      margin={{ right: "1rem" }}
                                      background={"#" + color}
                                    >
                                      <Text size="xsmall">{name}</Text>
                                    </Box>
                                  )
                                )}
                              </Box>
                            </Box>
                          </Card>
                        </Anchor>
                      </Link>
                    );
                  })}
              <Box width="35rem" height="25rem" align="center" justify="center">
                <Link to="/blog">
                  <Button
                    label={<Text color="brand">See More &#8680;</Text>}
                    icon={<Article color="brand" />}
                  ></Button>
                </Link>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default OpenSource;
