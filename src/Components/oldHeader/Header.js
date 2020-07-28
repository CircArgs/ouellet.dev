import React from "react";

import {
  HeaderContainer,
  HeaderWrapper,
  HeaderTitle,
  HeaderSubtitle,
  GithubLogin,
  Button,
} from "./";
import { config } from "../../config";

export const Header = () => {
  return (
    <HeaderContainer>
      <GithubLogin isAbsolute />

      <HeaderWrapper>
        <a href={config.home}>
          <HeaderTitle>{config.title}</HeaderTitle>
        </a>{" "}
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            margin: "auto",
          }}
        >
          <Button text="Main Page" icon="home" route={config.home} />
          {/* <Button text="Blog Home" icon="home" route="/" /> */}
        </div>
        <HeaderSubtitle>{config.subtitle}</HeaderSubtitle>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
