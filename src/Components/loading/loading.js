import React from "react";
import { GiSpinningSword } from "react-icons/gi";
import { Box } from "grommet";

const Loading = (props) => {
  return (
    <Box animation={{ type: "jiggle", size: "large", duration: 2000 }}>
      <GiSpinningSword {...{ size: "5rem", ...props }} />
    </Box>
  );
};

export default Loading;
