import React from "react";
import { Markdown, Box } from "grommet";
import { CodeBlock, CodeInline, HyperLink, Paragraph } from "./codeblock";

const PostBody = (props) => {
  return (
    <Box style={{ position: "relative" }} pad="small">
      <Box
        elevation="xlarge"
        background="background-front"
        style={{ position: "absolute", top: 0, left: 0, opacity: 0.5 }}
        fill
      ></Box>
      <Markdown
        style={{ zIndex: 2, maxWidth: "95vw" }}
        id="postBody"
        options={{
          overrides: {
            pre: {
              component: CodeBlock,
            },
            code: {
              component: CodeInline,
            },
            a: {
              component: HyperLink,
            },
            p: {
              component: Paragraph,
            },
          },
        }}
      >
        {props.children}
      </Markdown>
    </Box>
  );
};

export default PostBody;
