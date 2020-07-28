import React from "react";
import { Box } from "grommet";
import PostBody from "./postBody";
const CommentsSection = ({ postUrl, comments }) => {
  return (
    <Box
      width="large"
      align="center"
      style={{ overflow: "auto" }}
      height={{ max: "100vh" }}
    >
      <Box width="100%" align="center">
        <Box
          style={{ borderRadius: "10px" }}
          href={postUrl + "#issue-comment-box"}
          target="_blank"
          as="a"
          height="10rem"
          width="100%"
          background="light-1"
          margin="small"
          pad="small"
          border={{
            color: "dark-1",
            size: "medium",
            style: "solid",
            side: "all",
          }}
        >
          Post a comment
        </Box>
      </Box>
      {comments.map((v, id) => (
        <Box
          width="100%"
          height={{ max: "50rem" }}
          style={{ overflow: "auto", borderRadius: "10px" }}
          background="light-1"
          margin="small"
          pad="small"
          border={{
            color: "dark-1",
            size: "medium",
            style: "solid",
            side: "all",
          }}
        >
          <PostBody key={id}>{v.body}</PostBody>
        </Box>
      ))}
    </Box>
  );
};

export default CommentsSection;
