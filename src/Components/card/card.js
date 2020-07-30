import React from "react";
import { Box } from "grommet";
import styled from "styled-components";

const CardBox = styled(Box)`
  position: relative;
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.darkMode
      ? props.theme.global.elevation.dark.medium
      : props.theme.global.elevation.light.medium};

  &:hover {
    box-shadow: ${(props) =>
      props.darkMode
        ? props.theme.global.elevation.dark.large
        : props.theme.global.elevation.light.large};
  }
`;

const Card = ({ children, ...props }) => {
  return <CardBox {...props}>{children}</CardBox>;
};

export default Card;
