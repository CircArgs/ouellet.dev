import React, { Component } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Helmet } from "react-helmet";
import { HashRouter, Switch, Route } from "react-router-dom";
import { client } from "./Utils/apollo";
import Theme from "./theme";
import Router from "./Router";
import Page from "./Components/page/page";
import GithubCallback from "./Containers/GithubCallback";
import Home from "./Components/home/home";
import Blog from "./Components/blog/blog";
// import Blog from "./Containers/Blog";
import BlogPost from "./Containers/BlogPost";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const Application = () => {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get("code")) {
    return <GithubCallback />;
  }

  return (
    <>
      <Helmet>
        <title>Nick Ouellet (CircArgs)</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Nick Ouellet | Machine Learning Engineer + Developer"
        />
        <meta name="theme-color" content={Theme.global.colors["accent-1"]} />
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://avatars2.githubusercontent.com/u/35903677?u=49eab25357bc81bc919d74984fb90219e3bb6032&v=4"
        ></link>
      </Helmet>
      <ApolloProvider client={client}>
        <HashRouter history={history}>
          <Page></Page>
        </HashRouter>
      </ApolloProvider>
    </>
  );
};

export default Application;
