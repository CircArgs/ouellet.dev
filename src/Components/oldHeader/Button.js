import React from "react";

import { Button as GrommetButton } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { config } from "../../config";

const { enableOAuth, OAuthClientID } = config;

export const Button = ({ text, icon, route }) => {
  return (
    <GrommetButton
      href={route}
      label={text}
      icon={<FontAwesomeIcon icon={icon} />}
    />
  );
};
