import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/layout/Layout";
import Home from "./components/Home/Home";
import AviasalesApp from "./components/aviasalesDemo/AviasalesApp";
import Article from "./components/articles/Article";
import ArticlesHome from "./components/articles/ArticlesHome";
import Error404 from "./components/Error404/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects_hub/" component={Home} />
        <Route
          exact
          path="/projects_hub/aviasales_demo/"
          component={AviasalesApp}
        />
        <Route path="/projects_hub/layout" component={Layout} />
				<Route exact path="/projects_hub/articles/" component={ArticlesHome} />
        <Route path="/projects_hub/articles/:post_id" component={Article} />
				<Route path="*" component={Error404} />
      </Switch>
      <Navbar></Navbar>
    </BrowserRouter>
  );
};

export default App;
