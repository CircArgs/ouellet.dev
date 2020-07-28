import React, { useState, useEffect, useRef } from "react";

import { Heading, Text, Box, List } from "grommet";

const Interests = (props) => {
  const [inView, setInView] = useState();

  const ref = useRef();
  useEffect(() => {
    if (ref.current && !inView) {
      let rect = ref.current.getBoundingClientRect();
      setInView(
        window.innerHeight -
          ((rect.top * 2) / 3 + rect.bottom / 3) -
          props.footerHeight >
          0
      );
    }
  }, [props.scrolling]);

  return (
    <div>
      <Box
        ref={ref}
        id="hobbies"
        pad={{ horizontal: "10rem", vertical: "2.5rem" }}
        width="100vw"
        direction="row"
        justify="center"
        align="center"
        wrap
        height={{ min: props.height + "px" }}
        border={{
          color: "brand",
          size: "medium",
          style: "solid",
          side: "top",
        }}
        style={{ visibility: inView ? "visible" : "hidden" }}
        animation={
          inView ? { type: "fadeIn", delay: 500, duration: 1500 } : null
        }
      >
        <Heading>Interests and Hobbies</Heading>
        <Box direction="row" wrap justify="center" align="center">
          <Box height="100%" align="center" margin="small">
            <Heading level={3}>Media</Heading>
            <List
              primaryKey="key"
              secondaryKey="value"
              data={[
                {
                  key: "Favorite Game",
                  value:
                    "Mass Effect 2 (Hence the Reapers and Normandy in the darkmode background)",
                },
                { key: "Favorite Movie", value: "Maybe `Ex Machina`" },
              ]}
            />
          </Box>{" "}
          <Box height="100%" align="center" margin="small">
            <Heading level={3}>Hobbies</Heading>
            <List
              primaryKey="key"
              secondaryKey="value"
              data={[
                {
                  key: "Coding",
                  value:
                    "Data Science, Web Development and all sorts of exploration.",
                },
                {
                  key: "Metal Working",
                  value:
                    "I like to make things out of metal in my workshop including knives and other tools",
                },
                {
                  key: "Wood Working",
                  value:
                    "I've made all sorts of things out of wood from tables to doors.",
                },
                {
                  key: "Other DIY Repairs",
                  value:
                    "I always prefer to do something myself than pay a contractor. I cut down my own trees and repair my vehicles within reason.",
                },
              ]}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Interests;
