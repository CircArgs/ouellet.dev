import React from "react";
import { Box } from "grommet";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula as syntaxTheme } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const HyperLink = ({ children, ...props }) => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    className="blog-post-anchor"
  >
    {children}
    <style jsx="true">
      {`
        a {
          color: #484848;
          font-weight: 400;
        }
      `}
    </style>
  </a>
);

export const CodeBlock = ({ children }) => (
  <Box style={{ borderRadius: "10px", overflow: "hidden" }}>
    <SyntaxHighlighter style={syntaxTheme}>
      {children.props.children}
    </SyntaxHighlighter>
  </Box>
);
