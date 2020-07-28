import React from "react";
import { Box } from "grommet";
import styled from "styled-components";
import Reaper from "../svgs/reaper";
import Normandy from "../svgs/normandy";
import DeathStar from "../svgs/deathStar";
import MilleniumFalcon from "../svgs/milleniumFalcon";

const Actor = styled(Box)`
  position: absolute;
  top: 0%;
  left: 50%;

  animation: fly ${(props) => props.speed || "5s"} linear infinite;

  @keyframes fly${(props) => props.distance || ""} {
    0% {
      top: 0%;
    }

    100% {
      top: ${(props) => props.distance || "100%"};
    }
  }
`;

const MakeActor = (Component) => {
  return ({ style, ...props }) => {
    const { transform, ...remStyle } = style;
    return (
      <Actor
        {...props}
        style={{
          ...remStyle,
          transform: `translate(-50%, -100%) ${
            transform != null ? transform : ""
          }`,
        }}
      >
        <Component />
      </Actor>
    );
  };
};

export const FalconActor = MakeActor(MilleniumFalcon);
export const ReaperActor = MakeActor(Reaper);
export const NormandyActor = MakeActor(Normandy);
export const DeathStarActor = MakeActor(DeathStar);
