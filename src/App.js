import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Article from "./components/Article";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Task3 from "./components/Task3";

const Navigation = styled(Navbar)``;
function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/" component={Home} />
				<Route exact path="/skytrack_test/" component={Home} />
        <Route path="/task3" component={Task3} />
        <Route path="/:post_id" component={Article} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
