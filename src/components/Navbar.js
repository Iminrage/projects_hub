import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  border-bottom: 1px solid red;
  padding: 10px 150px;
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
  color: black;
`;

function Navbar() {
  return (
    <div className="">
      <Nav>
        <Ul>
          <Li>
            <NewNavLink to="/">Home</NewNavLink>
          </Li>
          <Li>
            <NewNavLink to="/task3">Task3</NewNavLink>
          </Li>
        </Ul>
      </Nav>
    </div>
  );
}

export default Navbar;
