import React from "react";
import styled from "styled-components";

const Option = styled.option``;
const Select = styled.select`
  border: none;
  box-shadow: none;
  box-sizing: border-box;
  padding: 18px 16px;
  margin: 0 1px;
  height: 56px;
  width: 212px;
  border-radius: 0 6px 6px 0;
  background: #ffffff;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #4a4a4a;
`;

function SelectType(props) {
  const options = props.tripTypes.map((values, idx) => (
    <Option key={idx} value={values}>
      {values}
    </Option>
  ));
  return (
    <div>
      <Select name="" id="">
        {options}
      </Select>
    </div>
  );
}
export default SelectType;
