import React from "react";
import { useAsync } from "react-use";
import { Box, Heading, Paragraph, Text, Anchor } from "grommet";
import { getBlogs } from "./graphql";
import Card from "../home/openSource/card";
import HyperSpace from "../stars/hyperspace";
import Loading from "../loading/loading";
import githubDateString from "../../Utils/githubDateString";

const postCompare = (a, b) => {
  return b.number - a.number;
};

const Blog = (props) => {
  const { loading, value } = useAsync(async () => {
    return await getBlogs();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    console.log(value);
  }
  return (
    <Box
      style={{ zIndex: 3, margin: "3rem" }}
      align="center"
      justify="center"
      margin="large"
    >
      <Heading margin={{ bottom: "large" }}>Blogs</Heading>

      {value == null
        ? null
        : value.data.repository.issues.nodes.sort(postCompare).map((post) => {
            const updatedAt = githubDateString(post.updatedAt);
            const createdAt = githubDateString(post.createdAt);
            return (
              <Anchor href={`/#/blog/${post.number}`}>
                <Card
                  margin="medium"
                  key={post.title}
                  background={props.darkMode ? "transparent" : "brand-light"}
                  align="center"
                  justify="center"
                  height="25rem"
                  width={{ max: "50rem" }}
                  pad="small"
                  style={{
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginLeft: "2rem",
                    marginRight: "2rem",
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
                    height="100vw"
                    width="100vh"
                    className="fade"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      zIndex: 1,
                      transform: "rotateZ(90deg) translate(-200%, 10%)",
                    }}
                  ></HyperSpace>

                  <Box
                    fill
                    align="center"
                    justify="around"
                    margin={{ horizontal: "auto" }}
                    style={{ zIndex: 3 }}
                  >
                    <Heading level={3} textAlign="center">
                      {post.title}
                    </Heading>
                    <Box direction="row">
                      <Text
                        margin={{ right: "small" }}
                        size="small"
                        color="light-4"
                      >{`Written: ${createdAt}`}</Text>
                      {createdAt !== updatedAt ? (
                        <Text
                          margin={{ right: "small" }}
                          size="small"
                          color="light-4"
                        >{`Last Updated: ${updatedAt}`}</Text>
                      ) : null}
                    </Box>
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
