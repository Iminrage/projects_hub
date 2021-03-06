import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import prev from "./img/arrowPrev.png";
import next from "./img/arrowNext.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { link: "/projects_hub/", title: "Home" },
        { link: "/projects_hub/aviasales_demo/", title: "Aviasales Demo" },
        { link: "/projects_hub/articles/", title: "Articles" },
        { link: "/projects_hub/layout/", title: "Layout" }
      ],
      isOpen: false,
      linkNum: 0,
      prevLink: 3,
      nextLink: 1
    };
  }
  toggleNav = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handlePagination = e => {
    const checker = (num, min, max) => {
      if (num > max) {
        return min;
      } else if (num < min) {
        return max;
      } else return num;
    };
    let linkNum;
    if (e.target.dataset.action === "increase") {
      linkNum = checker(
        this.state.linkNum + 1,
        0,
        this.state.projects.length - 1
      );
    } else if (e.target.dataset.action === "reduce") {
      linkNum = checker(
        this.state.linkNum - 1,
        0,
        this.state.projects.length - 1
      );
    }
    let nextLink = checker(linkNum + 1, 0, this.state.projects.length - 1);
    let prevLink = checker(linkNum - 1, 0, this.state.projects.length - 1);
    this.setState(
      { linkNum: linkNum, nextLink: nextLink, prevLink: prevLink }
    );
  };
  render() {
    return (
      <NavWrapper>
        <NavCase state={this.state.isOpen}>
          <Nav state={this.state.isOpen}>
            <Ul>
              {this.state.projects.map((project, idx) => {
                return (
                  <Li
                    key={idx}
                    active={this.state.linkNum === idx}
                    next={this.state.nextLink === idx}
                    prev={this.state.prevLink === idx}
                  >
                    {<NewNavLink to={project.link}>{project.title}</NewNavLink>}
                  </Li>
                );
              })}
            </Ul>
            <NavBtnPrev
              data-action="reduce"
              onClick={this.handlePagination}
              to={this.state.projects[this.state.prevLink].link}
            />
            <NavBtnNext
              data-action="increase"
							onClick={this.handlePagination}
							to={this.state.projects[this.state.nextLink].link}
            />
          </Nav>
        </NavCase>
        <NavToggle state={this.state.isOpen} onClick={this.toggleNav}>
          <Line state={this.state.isOpen}></Line>
          <Line del={this.state.isOpen}></Line>
          <Line state={this.state.isOpen}></Line>
        </NavToggle>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  @media (max-width: 640px) {
    transform: scale(0.7);
  }
`;
const NavCase = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  height: 280px;
  transform-origin: top right;
  transition: 0.5s all ease;
  transform: ${props =>
    props.state === false ? "rotate(180deg)" : "rotate(0)"};
  background: #b4e2ff;
  border-radius: 0 0 0 100%;
`;
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
const NavBtn = styled(NavLink)`
  position: absolute;
  border: none;
  display: block;
  padding: 0;
  width: 25px;
  height: 25px;
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;
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
  right: 13px;
  width: 59px;
  height: 43px;
  background: url(${next}) 0 0 / cover no-repeat;
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
  cursor: pointer;
  background: #000;
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
  transition: 0.3s all;
`;
export default Navbar;
