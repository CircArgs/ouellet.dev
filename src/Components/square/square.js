import { Box } from "grommet";
import styled from "styled-components";

const Square = styled(Box)`
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export default Square;
