import { Box } from "grommet";
import styled from "styled-components";

const Card = styled(Box)`
  .fade {
    opacity: 0%;
    transition: all 0.75s ease-in-out;
  }
  &:hover {
    .fade {
      opacity: 100%;
    }
    box-shadow: ${(props) =>
      props.darkMode ? props.theme.global.elevation.dark.wideMed : ""};
  }
`;

export default Card;
