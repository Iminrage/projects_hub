import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import InfoIcon from "../img/infoIcon.png";

const HintPop = WrappedComponent => {
  class HintWrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hintIsOpen: true
      };
    }
    render() {
      return (
        <div className="">
          <HintText opened={this.state.hintIsOpen}>
            <WrappedComponent />
          </HintText>
          <HintToggle
            onClick={() =>
              this.setState({ hintIsOpen: !this.state.hintIsOpen })
            }
          />
        </div>
      );
    }
  }
  return HintWrapper;
};

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 5%, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;
const fadeIn = keyframes`
	from{
		opacity: 0;
	}
	to{
		opacity: 1;
	}
`;
const HintText = styled.div`
  display: ${props => (props.opened ? "block" : "none")};
  position: absolute;
  bottom: 10%;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transform-origin: left;
  animation: ${fadeInUp} 0.5s both;
  @media (max-width: 640px) {
    height: 100%;
    top: 0;
    left: 0;
    right: auto;
    bottom: auto;
    background-color: rgba(0, 0, 0, 0.95);
    animation: ${fadeIn} 0.5s both;
    display: ${props => (props.opened ? "flex" : "none")};
    align-items: center;
  }
`;
const HintToggle = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  border: none;
  background: url(${InfoIcon}) 0 0 / contain no-repeat;
  cursor: pointer;
  @media (max-width: 640px) {
    top: 10px;
    left: 10px;
    right: auto;
    bottom: auto;
  }
`;

export default HintPop;