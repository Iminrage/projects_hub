import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Hh from "../img/hh.png";
import Gh from "../img/gh.png";
import Tg from "../img/tg.png";
import Mail from "../img/mail.png";

class LinksPop extends Component {
  state = {
    links: [
      {
        link: "https://github.com/Iminrage/projects_hub",
        title: "GitHub",
        img: Gh
      },
      { link: "tg://resolve?domain=folkaras", title: "Telegram", img: Tg },
      {
        link: "https://hh.ru/resume/d555c3d9ff05bc77ff0039ed1f6c3842566272",
        title: "HeadHunter",
        img: Hh
      },
      { link: "mailto:efolkaras@gmail.com", title: "Email", img: Mail }
    ],
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleEnter = () => {
    this.setState({ isOpen: true });
  };
  handleLeave = () => {
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <LinkPop
        opened={this.state.isOpen}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      >
        <nav>
          <Ul>
            {this.state.links.map((link, idx) => {
              return (
                <Li key={idx}>
                  <A href={link.link}>
                    <Img
                      src={link.img}
                      alt={link.title}
                      heigth="auto"
                      width="50"
                    />
                    {<Span opened={this.state.isOpen}>{link.title}</Span>}
                  </A>
                </Li>
              );
            })}
          </Ul>
        </nav>
      </LinkPop>
    );
  }
}

const LinkPop = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${props =>
    props.opened ? "rgba(31, 114, 167, 0.9)" : "rgba(180, 226, 255, 0.7)"};
  width: ${props => (props.opened ? "200px" : "50px")};
  border-radius: 0 5px 5px 0;
  padding: 20px 15px 20px 15px;
  transition: 0.3s all;
`;
const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;
const Li = styled.li`
  margin: 0;
  padding: 5px 0;
  list-style: none;
`;
const A = styled.a`
  display: flex;
  margin: 0;
  padding: 0;
  text-decoration: none;
  align-items: center;
  color: #dcf1ff;
  border-radius: 30px 0 0 30px;
  :hover {
    transition: 0.3s all;
    box-shadow: 10px 10px 46px -6px rgba(0, 0, 0, 0.75);
  }
`;
const Img = styled.img``;
const fadeIn = keyframes`
	from{
		opacity: 0;
	}
	to{
		opacity: 1;
	}
`;
const Span = styled.span`
  display: ${props => (props.opened === true ? "inline-block" : "none")};
  transition: all 1s;
  margin-left: 10px;
  animation: ${fadeIn} 0.3s both 0.3s;
`;

export default LinksPop;
