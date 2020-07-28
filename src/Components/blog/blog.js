import React from "react";
import { useAsync } from "react-use";
import { Box, Heading, Paragraph, Text, Anchor } from "grommet";
import { getBlogs } from "./graphql";
import Card from "../home/openSource/card";
import HyperSpace from "../stars/hyperspace";

import Loading from "../loading/loading";

const Blog = (props) => {
  const { loading, value } = useAsync(async () => {
    return await getBlogs();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Box style={{ zIndex: 3 }} align="center" justify="center" margin="large">
      <Heading margin={{ bottom: "large" }}>Blogs</Heading>

      {value == null
        ? null
        : value.data.repository.issues.nodes.map((post) => {
            return (
              <Anchor href={`/#/blog/${post.number}`}>
                <Card
                  margin="medium"
                  key={post.title}
                  background={props.darkMode ? "transparent" : "brand-light"}
                  align="center"
                  justify="center"
                  height="25rem"
                  width="50rem"
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
                    height="50rem"
                    width="25rem"
                    className="fade"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      zIndex: 1,
                      transform: "rotateZ(90deg) translate(-50%, -25%)",
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
                        ? post.bodyText.length > 100
                          ? post.bodyText.slice(0, 100) + "..."
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
            );
          })}
    </Box>
  );
};

export default Blog;
