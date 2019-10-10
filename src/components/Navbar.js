import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import navBtnBg from "./img/btnBg.png";
import navBg from "./img/navBg.png";
import prev from "./img/arrowPrev.png";
import next from "./img/arrowNext.png";

class Navbar extends Component {
  state = {
    isOpen: false,
    linkNum: 1
  };
  toggleNav = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handlePagination = e => {
    if (e.target.dataset.action === "increase") {
      let linkNum = this.state.linkNum + 1;
      linkNum > 5 && (linkNum = 1);
      this.setState({ linkNum: linkNum });
    } else if (e.target.dataset.action === "reduce") {
      let linkNum = this.state.linkNum - 1;
      linkNum < 1 && (linkNum = 5);
      this.setState({ linkNum: linkNum });
    }
  };
  render() {
    return (
      <div className="">
        <NavCase state={this.state.isOpen}>
          <Nav state={this.state.isOpen}>
            <Ul count={"none"}>
              <Li
                active={this.state.linkNum === 1}
                prev={this.state.linkNum - 1 === 1}
                next={this.state.linkNum === 5}
              >
                <NewNavLink to="/projects_hub/">Home</NewNavLink>
              </Li>
              <Li
                active={this.state.linkNum === 2}
                prev={this.state.linkNum - 1 === 2}
                next={this.state.linkNum + 1 === 2}
              >
                <NewNavLink to="/projects_hub/aviasales_demo/">
                  Aviasales Demo
                </NewNavLink>
              </Li>
              <Li
                active={this.state.linkNum === 3}
                prev={this.state.linkNum - 1 === 3}
                next={this.state.linkNum + 1 === 3}
              >
                <NewNavLink to="/projects_hub/articles/">
                  Article Home
                </NewNavLink>
              </Li>
              <Li
                active={this.state.linkNum === 4}
                prev={this.state.linkNum - 1 === 4}
                next={this.state.linkNum + 1 === 4}
              >
                <NewNavLink to="/projects_hub/layout">Layout</NewNavLink>
              </Li>
              <Li
                active={this.state.linkNum === 5}
                prev={this.state.linkNum === 1}
                next={this.state.linkNum + 1 === 5}
              >
                <Alink href="https://github.com/Iminrage/projects_hub">
                  GitHub
                </Alink>
              </Li>
            </Ul>
            <NavBtnPrev data-action="reduce" onClick={this.handlePagination} />
            <NavBtnNext
              data-action="increase"
              onClick={this.handlePagination}
            />
          </Nav>
        </NavCase>
        <NavToggle state={this.state.isOpen} onClick={this.toggleNav}>
          <Line state={this.state.isOpen}></Line>
          <Line del={this.state.isOpen}></Line>
          <Line state={this.state.isOpen}></Line>
        </NavToggle>
      </div>
    );
  }
}

const Nav = styled.nav`
  display: ${props => (props.state === true ? "block" : "none")};
  position: absolute;
  top: 0;
  right: 0;
`;
const Ul = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 150px;
  top: 120px;
  right: 50px;
  transform: rotate(-45deg);
`;
const Li = styled.li`
  position: absolute;
  display: ${props =>
    props.active || props.prev || props.next ? "block" : "none"};
  font-size: ${props => (props.active ? "16px" : "12px")};
  color: ${props => (props.active ? "black" : "grey")};
  top: ${props => (props.prev && "-20px") || (props.next && "25px")};
  left: ${props => (props.next && "10px") || (props.prev && "10px")};
  pointer-events: ${props => (props.next || props.prev ? "none" : "auto")};
  list-style: none;
  padding: 0;
  transition: 0.5s all;
`;
const NewNavLink = styled(NavLink)`
  display: block;
  padding: 0;
  border-radius: 100%;
  text-decoration: none;
  color: inherit;
  :hover {
    color: green;
  }
`;
const Alink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  :hover {
    color: green;
  }
`;
const NavBtn = styled.button`
  position: absolute;
  border: none;
  padding: 0;
  width: 25px;
  height: 25px;
  background-color: transparent;
  box-shadow: none;
`;
const NavBtnPrev = styled(NavBtn)`
  top: 13px;
  right: 209px;
  width: 39px;
  height: 66px;
  background: url(${prev}) 0 0 / cover no-repeat;
`;
const NavBtnNext = styled(NavBtn)`
  top: 200px;
  right: 39px;
  width: 59px;
  height: 43px;
  background: url(${next}) 0 0 / cover no-repeat;
`;
const NavCase = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 280px;
  transform-origin: top right;
  transition: 0.5s all ease;
  transform: ${props =>
    props.state === false ? "rotate(180deg)" : "rotate(0)"};
  background: url(${navBg}) 0 0 / cover no-repeat;
  border-radius: 0 0 0 100%;
`;
const NavToggle = styled.button`
  position: fixed;
  padding: 0 0 20px 20px;
  top: 0;
  right: 0;
  margin: 0;
  margin-bottom: -3px;
  border: none;
  border-radius: 0 0 0 100%;
  color: lightgrey;
  width: 114px;
  height: 114px;
  background: url(${navBtnBg}) 0 0 / cover no-repeat;
  :focus {
    outline: none;
  }
`;

const Line = styled.span`
  margin: 3px auto;
  width: 30px;
  height: 3px;
  background-color: #fff;
  display: ${props => (props.del === true ? "none" : "block")};
	transform: ${props => props.state === true && "rotate(-45deg)"};
	transition: .3s all;
`;
export default Navbar;
