import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import navBg from "./img/nav_bg.png";
import Inprgrs from "./img/inprogress.png";
import navBtnBg from "./img/navbtnbg.png";

class Navbar extends Component {
  state = {
		isOpen: false,
		focus: false
  };
  toggleNav = () => {
    this.setState({ isOpen: !this.state.isOpen });
	};
	toggleFocus = () =>{
		this.setState({ focus: !this.state.focus });
	}
  render() {
    return (
      <div className="">
        <NavBg state={this.state.isOpen} focus={this.state.focus}/>
        <NavCase state={this.state.isOpen}>
          <Nav>
            <Ul>
              <Li>
                <Alink href="https://github.com/Iminrage/projects_hub">
                  GitHub
                </Alink>
              </Li>
              <Li>
                <NewNavLink to="/projects_hub/">Home</NewNavLink>
              </Li>
              <Li>
                <NewNavLink to="/projects_hub/aviasales_demo/">
                  Aviasales Demo
                </NewNavLink>
              </Li>
              <Li>
                <NewNavLink to="/projects_hub/articles/">
                  Article Home
                </NewNavLink>
              </Li>
              <Li>
                <NewNavLink to="/projects_hub/layout">Layout</NewNavLink>
              </Li>
            </Ul>
          </Nav>
        </NavCase>
        <NavToggle state={this.state.isOpen} onClick={this.toggleNav} onFocus={this.toggleFocus}>
          <Line state={this.state.isOpen}></Line>
          <Line del={this.state.isOpen}></Line>
          <Line state={this.state.isOpen}></Line>
        </NavToggle>
      </div>
    );
  }
}

const Nav = styled.nav`
  position: relative;
  padding: 100px 100px;
`;
const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
const Li = styled.li`
  list-style: none;
  padding: 0 10px;
`;
const NewNavLink = styled(NavLink)`
  display: inline-block;
  padding: 10px 40px 10px 30px;
  border: 1px solid gray;
  text-decoration: none;
  color: white;
  background-color: rgba(58, 58, 58, 0.5);
  :hover {
    background-color: rgba(58, 58, 58, 0.8);
    color: #cbebff;
  }
`;
const Alink = styled.a`
  display: inline-block;
  padding: 10px 40px 10px 30px;
  border: 1px solid gray;
  text-decoration: none;
  color: white;
  background-color: rgba(58, 58, 58, 0.5);
  :hover {
    background-color: rgba(58, 58, 58, 0.8);
    color: #cbebff;
  }
`;

const NavCase = styled.div`
  position: fixed;
  right: 0;
  display: ${props => (props.state === true ? "block" : "none")};
`;
const NavBg = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 500px;
  height: 500px;
  transform-origin: top right;
	transition: 0.5s all;
  transform: ${(props) => props.state === false ? "scale3d(0.3, 0.3, 1)" : "scale3d(1, 1, 1)"};
  background: url(${navBtnBg}) 0 0 / cover no-repeat;
	border-radius: 0 0 0 100%;
	border: ${(props) => props.focus && "1px solid orange"}
`;
const NavToggle = styled.button`
  position: fixed;
  padding: 20px;
  right: 0;
  margin: 0;
  margin-bottom: -3px;
  border: none;
  border-radius: 100%;
  color: lightgrey;
  background: transparent;
	:focus{
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
`;
export default Navbar;
