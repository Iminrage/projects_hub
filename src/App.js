import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Article from "./components/articles/Article";
import ArticleHome from "./components/articles/ArticleHome";
import Navbar from "./components/Navbar";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import AviasalesApp from "./components/aviasalesDemo/AviasalesApp";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects_hub/articles/" component={ArticleHome} />
        <Route exact path="/projects_hub/" component={Home} />
        <Route
          exact
          path="/projects_hub/aviasales_demo/"
          component={AviasalesApp}
        />
        <Route path="/projects_hub/layout" component={Layout} />
        <Route path="/projects_hub/:post_id" component={Article} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
