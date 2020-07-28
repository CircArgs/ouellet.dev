import React from "react";
import { Markdown } from "grommet";
import { CodeBlock } from "./codeblock";
const PostBody = (props) => {
  return (
    <Markdown
      options={{
        overrides: {
          pre: {
            component: CodeBlock,
          },
        },
      }}
    >
      {props.children}
    </Markdown>
  );
};

export default PostBody;
