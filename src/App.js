import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Article from "./components/articles/Article";
import ArticleHome from "./components/articles/ArticleHome";
import Navbar from "./components/Navbar";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import AviasalesApp from "./components/aviasalesDemo/AviasalesApp";
import { blockParams } from "handlebars";

class App extends Component {
  state = {
    isOpen: true
  };
  toggleNav = () => {
    console.log(this.state.isOpen);

    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <BrowserRouter>
        <NavCase state={this.state.isOpen}>
          <Navbar></Navbar>
        </NavCase>
        <NavToggle onClick={this.toggleNav}>X</NavToggle>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/projects_hub/article_home/"
            component={ArticleHome}
          />
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
  }
}

const NavCase = styled.div`
  display: ${props => (props.state == 1 ? "block" : "none")};
`;

const NavToggle = styled.button`
  position: fixed;
  top: 100px;
  right: 100px;
  border: 1px solid red;
  width: 20px;
  height: 20px;
`;
export default App;
