import React from "react";
import HintPop from "./HintPop";
import styled from "styled-components";

const Hint = () => {
  return (
    <HintWrapper>
      
    </HintWrapper>
  );
};
const HintWrapper = styled.div``;
const HintText = styled.p`
  color: #dcf1ff;
  text-align: center;
  width: 30%;
  padding: 20px 0;
  margin: 0 auto;
`;
const HintBText = styled.b`
  color: brown;
  display: inline-block;
  padding-top: 10px;
  text-transform: uppercase;
`;

export default HintPop(Hint);