import React from "react";
import { Text } from "grommet";
import styled from "styled-components";
import Anchor from "../anchor/anchor";
const Logo = styled(Text)`
  font-size: ${(props) => (1 / props.level) * 4}rem;
  // white-space: nowrap;

  text-align: center;
  transition: 0.5s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.global.colors["accent-1"]};
    cursor: pointer;
  }
  margin: 0;
  font-family: ${(props) => props.theme.global.logoFont};
`;

export default (props) => {
  return (
    <Anchor href="/">
      <Logo
        level={1}
        color="brand"
        margin="small"
        {...props}
        a11yTitle="Nick Ouellet"
      >
        {props.text ? props.text : "Nick Ouellet"}
      </Logo>
    </Anchor>
  );
};
