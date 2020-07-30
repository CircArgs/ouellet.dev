import React from "react";
import { GiSpinningSword } from "react-icons/gi";
import { Box } from "grommet";

const Loading = (props) => {
  return (
    <Box direction="column" margin="medium" align="center" justify="center">
      <Box animation={{ type: "jiggle", size: "large", duration: 2000 }}>
        <GiSpinningSword {...{ size: "5rem", ...props }} />
      </Box>{" "}
      <Box margin="medium" animation="pulse">
        Loading...
      </Box>
    </Box>
  );
};

export default Loading;
