import React, { useState, useEffect, useRef } from "react";
import { useMin } from "../../Utils/cssMath";
import {
  Heading,
  Text,
  Box,
  Drop,
  Image,
  Avatar,
  Grommet,
  Video,
  Anchor,
  Paragraph,
} from "grommet";
import Card from "./openSource/card";
import HyperSpace from "../stars/hyperspace";
import Theme from "../../theme";

const bigProjects = [
  {
    title: "Wildfire Detection",
    alt: "gartner award travelers",
    date: "October 21, 2019",
    description:
      "I created an AI Vision Model to detect the severity of fire damage to insured's homes to allow Travelers to respond to policy holders before they themselves could respond during such traumatic times.",
    image:
      "https://emtemp.gcom.cloud/ngw/commonassets/images/build-graphics/gartner-logos/globalsite_gartner_logo.png",
    href:
      "https://www.gartner.com/en/newsroom/press-releases/gartner-announces-winners-of-the-2019-gartner-eye-on-innovation-",
  },
  {
    title: "Lluvia Health - Upfront Healthcare Costs",
    alt: "Lluvia Health - Upfront Healthcare Costs",
    date: "July 1, 2020",
    description:
      "Developed a site which is dedicated to helping people know the price of their healthcare and dedicated resources to helping people efficiently find testing during the COVID-19 pandemic.",
    image: require("../../Assets/Img/lluvia.jpeg"),
    href: "https://www.lluviahealth.com",
  },
];
const ProjectCard = (props) => {
  return (
    <Anchor href={props.href} alt={props.alt}>
      <Card
        margin="medium"
        background={props.darkMode ? "transparent" : "brand-light"}
        align="center"
        justify="center"
        height="30rem"
        width="45rem"
        direction="row"
        style={{
          position: "relative",
          borderRadius: "10px",
          overflow: "hidden",
        }}
        border={{
          color: "brand",
          size: "xsmall",
          style: "solid",
          side: "all",
        }}
        elevation={!props.darkMode ? "wideMed" : null}
        darkMode={props.darkMode}
      >
        <HyperSpace
          height="50rem"
          width="50rem"
          className="fade"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            transform: "rotateZ(-45deg) translate(15%, -15%)",
          }}
        ></HyperSpace>

        <Box
          fill
          align="center"
          justify="around"
          margin={{ horizontal: "small" }}
          style={{ zIndex: 3 }}
        >
          <Box width="15rem" height="100%" justify="center" align="center">
            <img
              src={props.image}
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </Box>
          <Box align="center" justify="around" fill margin="small">
            <Heading textAlign="center" level={3}>
              {props.title}
            </Heading>
            <Paragraph textAlign="center" size="small">
              {props.description}
            </Paragraph>
            <Text margin={{ horizontal: "auto", bottom: "1rem" }} size="xsmall">
              {props.date}
            </Text>
          </Box>
        </Box>
      </Card>
    </Anchor>
  );
};

const BigProjects = (props) => {
  const [inView, setInView] = useState();
  const ref = useRef();
  useEffect(() => {
    if (ref.current && !inView) {
      let rect = ref.current.getBoundingClientRect();
      setInView(
        window.innerHeight - (rect.top + rect.bottom) / 2 - props.footerHeight >
          0
      );
    }
  }, [props.scrolling]);

  return (
    <div>
      <Box
        fill
        style={{
          visibility: inView ? "visible" : "hidden",
        }}
        animation={
          inView ? { type: "slideUp", delay: 0, duration: 3000 } : null
        }
      >
        <Box
          ref={ref}
          id="closedSource"
          pad={{ horizontal: "2rem", vertical: "2.5rem" }}
          height={{ min: props.height + "px" }}
          justify="center"
          align="center"
          fill
          border={{
            color: "brand",
            size: "medium",
            style: "solid",
            side: "top",
          }}
          animation={
            inView ? { type: "fadeIn", delay: 0, duration: 2000 } : null
          }
        >
          <Heading margin={{ top: "medium", bottom: "large" }}>
            Big Projects
          </Heading>
          <Box direction="row" fill justify="center" align="center" wrap>
            {bigProjects.map((project) => {
              return (
                <ProjectCard
                  darkMode={props.darkMode}
                  {...project}
                  key={project.title}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default BigProjects;
