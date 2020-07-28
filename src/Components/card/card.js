import React from "react";
import { Box } from "grommet";
import styled from "styled-components";

const CardBox = styled(Box)`
  overflow: hidden;
  position: relative;
  border-radius: 10px; 
  box-shadow: ${(props) =>
    props.darkMode
      ? props.theme.global.elevation.dark.medium
      : props.theme.global.elevation.light.medium};
  &::before {
    position: absolute;
    border-radius: 100000rem;
    ${(props) => {
      let size = "max(100vh, 100vw)";
      if (props.width != null && props.height != null) {
        size = `max(calc(1.5 * ${props.width}), calc(1.5 * ${props.height}))`;
      }

      return `width: ${size}; height: ${size};`;
    }}
    content: "";
    background: ${(props) =>
      props.hoverColor || props.theme.global.colors["accent-4"]};
    transition: all .666s ease-in-out;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 100%;
  }

  &:hover {
    
    box-shadow: ${(props) =>
      props.darkMode
        ? props.theme.global.elevation.dark.large
        : props.theme.global.elevation.light.large};
    &::before {
      width: 0;
    height: 0;
        opacity: 0%;
        
`;

const Card = ({ children, ...props }) => {
  return <CardBox {...props}>{children}</CardBox>;
};

export default Card;
