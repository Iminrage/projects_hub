import React, { Component } from "react";
import styled from "styled-components";
import Hh from "./img/hh.png";
import Gh from "./img/gh.png";
import Tg from "./img/tg.png";
import Mail from "./img/mail.png";


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
		isOpen: false,
	};
	handleToggle = () => {
		this.setState({isOpen: !this.state.isOpen})
	}
  render() {
    return (
      <LinkPop>
        <nav>
          <Ul>
            {this.state.links.map((link, idx) => {
              return (
                <Li key={idx}>
                  <A href={link.link}>
                    <Img src={link.img} alt={link.title} heigth="auto" width="50"/>
                    <Span opened={this.state.isOpen}>{link.title}</Span>
                  </A>
                </Li>
              );
            })}
          </Ul>
        </nav>
				<NavToggle onClick={this.handleToggle} opened={this.state.isOpen}>{"<"}</NavToggle>
      </LinkPop>
    );
  }
}

const LinkPop = styled.div`
  position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	background-color: rgba(180,226,255,0.7);
	border-radius: 0 5px 5px 0;
	padding: 20px 15px 20px 15px;
`;
const NavToggle = styled.button`
	position: absolute;
	top: 50%;
	right: -10px;
	transform: translateY(-50%);
	border: none;
`;
const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;
const Li = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const A = styled.a`
	display: block;
  margin: 0;
  padding: 0;
	text-decoration: none;
`;
const Img = styled.img``;
const Span = styled.span`
	display: ${props => props.opened === true? "inlien-block":"none"};
`;

export default LinksPop;
