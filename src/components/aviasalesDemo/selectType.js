import React from "react";
import styled from "styled-components";

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
	@media (max-width: 1050px) {
		margin: 1px;
		width: 310px;
		border-radius: 0 0 6px 0;
  }
	@media (max-width: 640px) {
		width: 308px;
		border-radius: 0 0 6px 6px;
  }
`;

export default SelectType;
