import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import navBg from "./img/nav_bg.png";

function Navbar() {
  return (
    <div className="">
      <Nav>
        <Ul>
          <Li>
            <Alink href="https://github.com/Iminrage/projects_hub">GitHub</Alink>
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
            <NewNavLink to="/projects_hub/articles/">Article Home</NewNavLink>
          </Li>
          <Li>
            <NewNavLink to="/projects_hub/layout">Layout</NewNavLink>
          </Li>
        </Ul>
      </Nav>
    </div>
  );
}

const Nav = styled.nav`
  padding: 10px 150px;
  background: #5a7c86;
`;
const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
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

export default Navbar;
