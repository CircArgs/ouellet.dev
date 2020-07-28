import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/home/home";
import Blog from "./Components/blog/blog";
// import Blog from "./Containers/Blog";
import BlogPost from "./Containers/BlogPost";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const Router = (props) => {
  return (
    <HashRouter history={history}>
      <Switch>
        <Route exact path="/" component={() => <Home {...props} />} />
        <Route exact path="/blog" component={() => <Blog {...props} />} />
        <Route
          exact
          path="/blog/:issueNumber"
          component={() => <BlogPost {...props} />}
        />
      </Switch>
    </HashRouter>
  );
};

export default Router;
