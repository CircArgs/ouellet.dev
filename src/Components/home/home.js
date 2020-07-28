import React, { useState, useEffect, useRef } from "react";
import Intro from "./intro";
import Skills from "./skills";
import Contact from "./contact";
import OpenSource from "./openSource/openSource";
import Blogs from "./blogs/blogs";
import BigProjects from "./closedSource";
import Interests from "./interests";
import { useWindowSize, useScrolling } from "react-use";
import { Box } from "grommet";
import { IoMdRocket } from "react-icons/io";
const Home = (props) => {
  const mainRef = useRef();
  const [showAutoScroll, setShowAutoScroll] = useState(false);
  const scrolling = useScrolling(mainRef);
  useEffect(() => {
    if (mainRef.current != null) {
      if (0.66 * remainingHeight < mainRef.current.scrollTop) {
        setShowAutoScroll(true);
      } else {
        setShowAutoScroll(false);
      }
    }
  }, [scrolling]);
  const { height: windowHeight } = useWindowSize();
  let remainingHeight = windowHeight - props.headerHeight - props.footerHeight;
  return (
    <>
      {" "}
      <Box
        height={remainingHeight + "px"}
        style={{ overflow: "auto", position: "relative" }}
        ref={mainRef}
      >
        <Intro {...props} height={remainingHeight} />
        <Skills scrolling={scrolling} {...props} height={remainingHeight / 2} />
        <Blogs scrolling={scrolling} {...props} height={remainingHeight / 2} />
        <OpenSource
          scrolling={scrolling}
          {...props}
          height={remainingHeight / 2}
        />
        <BigProjects
          scrolling={scrolling}
          {...props}
          height={remainingHeight / 2}
        />
        <Interests
          scrolling={scrolling}
          {...props}
          height={remainingHeight / 2}
        />
        <Contact
          scrolling={scrolling}
          {...props}
          height={remainingHeight / 2}
        />
      </Box>
      {showAutoScroll ? (
        <Box
          style={{
            borderRadius: "100rem",
            position: "absolute",
            bottom: "3rem",
            right: "3rem",
            zIndex: 100,
          }}
          elevation="small"
          pad="1rem"
          background="brand"
          animation={scrolling ? "jiggle" : "pulse"}
          onClick={() => {
            mainRef.current.scroll({
              top: 0,

              behavior: "smooth",
            });
          }}
        >
          <IoMdRocket size="3rem" />
        </Box>
      ) : null}
    </>
  );
};

export default Home;
