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
        <NavToggle onClick={this.toggleNav}>{this.state.isOpen? "Hide navigation": "Show navigation"}</NavToggle>
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
	padding: 5px;
	margin: 0;
	color: lightgrey;
	border: 1px solid grey;
	box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
	background: #50757e;
`;
export default App;
