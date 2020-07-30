import React from "react";
import { useAsync } from "react-use";
import { Box, Heading, Text, Anchor, Avatar } from "grommet";
import readingTime from "reading-time";
import PostBody from "./postBody";
import { getBlog } from "./graphql";
import githubDateString from "../../Utils/githubDateString";
import styled from "styled-components";
import Loading from "../loading/loading";
import CommentsSection from "./commentSection";
const BlogContainer = styled(Box)`
  z-index: 9;
  /* margin: 5rem 20% 5rem 20%;
  ${(props) => props.theme.media.small`
  margin-left: 10rem;
  margin-right: 10rem;
`}
  ${(props) => props.theme.media.small`
  margin-left: 2rem;
  margin-right: 2rem;
`} */
`;

const BlogPost = (props) => {
  const { loading, value } = useAsync(async () => {
    return await getBlog(props.match.params.issueNumber);
  }, []);

  if (loading) return <Loading />;
  if (value != null) {
    const issue = value.data.repository.issue;
    const updatedAt = githubDateString(issue.updatedAt);
    const createdAt = githubDateString(issue.createdAt);

    return (
      <BlogContainer margin="medium" width="large" align="center">
        <Box width="100%" align="center">
          <Heading textAlign="center">{issue.title}</Heading>
          <Box
            margin="small"
            width="100%"
            direction="row"
            align="center"
            justify="start"
          >
            <Anchor href={issue.author.url}>
              <Avatar src={issue.author.avatarUrl} />
            </Anchor>
            <Box margin={{ left: "small" }}>
              <Text>
                {issue.author.login +
                  (issue.author.login === "CircArgs" ? " (Nick Ouellet)" : "")}
              </Text>
              <Box direction="row" justify="between">
                <Text size="small" color="light-4" margin={{ right: "small" }}>
                  {readingTime(issue.bodyText).text}
                </Text>
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
                <Anchor
                  margin={{ right: "small" }}
                  href={issue.url}
                  size="small"
                  color="light-4"
                >
                  Read it on Github
                </Anchor>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          align="center"
          margin={{ vertical: "3rem" }}
          pad={{ bottom: "3rem" }}
          border={{
            color: "brand",
            size: "medium",
            style: "solid",
            side: "bottom",
          }}
        >
          <PostBody>{issue.body}</PostBody>
        </Box>
        <Heading level={2}>Comments</Heading>
        <CommentsSection postUrl={issue.url} comments={issue.comments.nodes} />
      </BlogContainer>
    );
  }
  return;
};

export default BlogPost;
