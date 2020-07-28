import styled from "styled-components";

import { config } from "../../config";
const { background } = config.header;

export const HeaderContainer = styled.div`
  position: relative;
  padding: 5em;
  text-align: center;
  ${background}

  @media only screen and (max-width: 768px) {
    padding: 3em;
  }
`;
