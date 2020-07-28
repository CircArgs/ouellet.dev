import React from "react";
import { useAsync } from "react-use";
import { Box } from "grommet";
import { getResumeHtml, getResumeCss } from "./graphql";
import parse from "html-react-parser";

import Loading from "../loading/loading";

const Blog = (props) => {
  const { loading: loadingHtml, value: valueHtml } = useAsync(async () => {
    return await getResumeHtml();
  }, []);
  const { loading: loadingCss, value: valueCss } = useAsync(async () => {
    return await getResumeCss();
  }, []);
  let css = null;
  let html = null;

  if (valueHtml != null) {
    html = valueHtml.data.repository.content.text;
  }
  if (valueCss != null) {
    css = valueCss.data.repository.content.text;
  }
  return (
    <Box style={{ zIndex: 3 }} align="center" justify="center" margin="large">
      {loadingHtml ? (
        <Loading />
      ) : html != null ? (
        parse(`<style>${css == null ? "" : css}</style> ${html}`)
      ) : null}
    </Box>
  );
};

export default Blog;
