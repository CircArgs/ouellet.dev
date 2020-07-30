import React from "react";
import { Box, Anchor, Paragraph as GParagraph } from "grommet";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula as syntaxTheme } from "react-syntax-highlighter/dist/esm/styles/hljs";

const StyledAnchor = styled(Anchor)`
  color: ${(props) => props.theme.global.colors["accent-1"]} !important;
`;
export const HyperLink = ({ children, ...props }) => (
  <StyledAnchor href={props.href} target="_blank" rel="noopener noreferrer">
    {children}
  </StyledAnchor>
);

export const CodeBlock = ({ children }) => (
  <Box style={{ borderRadius: "10px", overflow: "auto" }}>
    <SyntaxHighlighter style={syntaxTheme}>
      {children.props.children}
    </SyntaxHighlighter>
  </Box>
);

export const CodeInline = ({ children }) => (
  <Box
    background="brand"
    as="code"
    pad={{ vertical: ".1rem", horizontal: ".2rem" }}
    style={{ borderRadius: "2px", overflow: "hidden", display: "inline" }}
  >
    {children}
  </Box>
);

export const Paragraph = ({ children }) => {
  return (
    <GParagraph fill margin={{ vertical: "small" }}>
      {children}
    </GParagraph>
  );
};

export const Ul = ({ children }) => {
  return (
    <Box as="ul" fill margin="small">
      {children}
    </Box>
  );
};
