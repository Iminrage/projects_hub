import React from "react";
import styled from "styled-components";

const Week = props => {
  return (
    <div className="">
      {props.week.map(e => {
        return <button>{e}</button>;
      })}
    </div>
  );
};

export default Week;
