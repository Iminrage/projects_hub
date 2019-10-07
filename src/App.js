import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Article from "./components/articles/Article";
import ArticleHome from "./components/articles/ArticleHome";
import Navbar from "./components/Navbar";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import AviasalesApp from "./components/aviasalesDemo/AviasalesApp";

const Navigation = styled(Navbar)``;
function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
				<Route exact path="/" component={Home} />
        <Route exact path="/projects_hub/article_home/" component={ArticleHome} />
				<Route exact path="/projects_hub/" component={Home} />
				<Route exact path="/projects_hub/aviasales_demo/" component={AviasalesApp} />
        <Route path="/projects_hub/layout" component={Layout} />
        <Route path="/projects_hub/:post_id" component={Article} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
