import React, { useState, useEffect, useRef } from "react";
import SelectType from "./selectType";
import styled from "styled-components";
import AutoCompleteInput from "./AutoCompleteInput";
import DatePicker from "./datePicker";

const Search = props => {
  const names = ["dept", "dest", "deptDate", "backDate"];
  const [focus, setFocus] = useState(null);
  const [render, reRender] = useState(null);
  const [valueStore, setValueStore] = useState({
    [names[0]]: "",
    [names[1]]: "",
    [names[2]]: "",
    [names[3]]: ""
  });
  const handleFocus = e => {
    setFocus(e);
    reRender(render + 1);
  };
  const saveValue = (name, value) => {
    setValueStore({ ...valueStore, [name]: value });
  };
  return (
    <Form>
      <SearchButton type="submit">
        Найти билеты
        <SearchButtonIcon>
          <svg
            width="26"
            height="21"
            viewBox="0 0 26 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.1586 9.06805H5.22021L1.49152 6.08511L0 6.83084L1.74078 9.73212C1.58307 9.96887 1.49152 10.2535 1.49152 10.5596C1.49152 10.7731 1.53577 10.9756 1.61566 11.1584L0 14.2883L1.49152 15.0341L5.22021 12.0511H11.1862L7.45746 21H10.4404L16.4064 12.0511H23.8625C24.6922 12.0511 25.3553 11.3833 25.3553 10.5596C25.3553 9.7301 24.687 9.06805 23.8625 9.06805H16.4064L10.4404 0.119141H7.45746C7.45746 0.119141 9.84949 5.99219 11.1862 9.06805H11.1586Z"
              fill="white"
            />
          </svg>
        </SearchButtonIcon>
      </SearchButton>
      <InputsWrapper>
        <CityInputs>
          <AutoCompleteInput
            name={names[0]}
            pos={0}
            focused={focus === 0 && true}
            changeValue={saveValue}
            value={valueStore[names[0]]}
            tryFocus={handleFocus}
          />
          <AutoCompleteInput
            name={names[1]}
            pos={1}
            focused={focus === 1 && true}
            changeValue={saveValue}
            value={valueStore[names[1]]}
            tryFocus={handleFocus}
          />
        </CityInputs>
        <OtherInputs>
          <DateInputs>
            <DatePicker type="date" name={names[2]} />
            <DatePicker type="date" name={names[3]} />
          </DateInputs>
          <SelectType
            tripTypes={["1 пассажир, эконом", "2 пассажира, эконом"]}
          />
        </OtherInputs>
      </InputsWrapper>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-content: center;
  align-items: center;
  @media (max-width: 1050px) {
  }
`;
/* const MainSearchInput = styled.div`
  border: none;
  box-shadow: none;
  box-sizing: border-box;
  padding: 18px 16px;
  margin: 0 1px;
  height: 56px;
  width: ${props => (props.type === "date" ? "180px" : "224px")};
  background: #ffffff;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #4a4a4a;
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px #ff6d00;
  }
  @media (max-width: 1050px) {
    margin: 1px 1px;
    width: ${props => (props.type === "date" ? "154px" : "310px")};
  }
  @media (max-width: 640px) {
    margin: 1px 1px;
    width: ${props => (props.type === "date" ? "153px" : "308px")};
  }
`; */
/* const AutoComplete = styled(AutoCompleteInput)`
  position: relative;
`;
const MainSearchInputDeptWrapper = styled.div`
  position: relative;
`;

const MainSearchInputDept = styled(MainSearchInput)`
  position: relative;
  border-radius: 6px 0 0 6px;
  @media (max-width: 1050px) {
    border-radius: 6px 0 0 0;
  }
  @media (max-width: 640px) {
    border-radius: 6px 6px 0 0;
  }
`;
const MainSearchInputDest = styled(MainSearchInput)`
  @media (max-width: 1050px) {
    border-radius: 0 6px 0 0;
  }
  @media (max-width: 640px) {
    border-radius: 0 0 0 0;
  }
`;
const MainSearchInputDateDept = styled(MainSearchInput)`
  @media (max-width: 1050px) {
    border-radius: 0 0 0 6px;
  }
  @media (max-width: 640px) {
    border-radius: 0 0 0 0;
  }
`; */

/* const MainSearchInputDateDest = styled(MainSearchInput)``; */
const InputsWrapper = styled.div`
  display: flex;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

const CityInputs = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const AutoCompleteInputWrapper = styled.div`
  position: relative;
`;
const AutoList = styled.ul`
  display: ${props => (props.visible ? "block" : "none")};
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background: #fff;
  max-height: 250px;
`;
const AutoKey = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  user-select: none;
  background: ${props => props.selected && "gray"};
`;
const AKeyData = styled.span`
  & {
    pointer-events: none;
  }
`;

const DateInputs = styled.div`
  display: flex;
`;
const OtherInputs = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

/* const Swap = styled.div`
  position: absolute;
  top: 50%;
  right: -13px;
  width: 26px;
  height: 26px;
  border-radius: 100%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  @media (max-width: 640px) {
    top: auto;
    right: 10px;
    bottom: -13px;
    transform: rotate(-90deg);
  }
`; */
/* const SwapArrow = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;
const SwapCircle = styled.div`
  position: absolute;
  border-radius: 100%;
  width: 26px;
  height: 26px;
  background: #fff;
  transition: 0.3s all;
  ${Swap}:hover & {
    transform: scale3d(1.15, 1.15, 1.15);
  }
`; */
/* const SwapArrowR = styled(SwapArrow)`
  transition: 0.2s all;

  ${Swap}:hover & {
    transform: translateX(10%);
  }
`;
const SwapArrowL = styled(SwapArrow)`
  transition: 0.2s all;
  margin-bottom: 2px;
  ${Swap}:hover & {
    transform: translateX(-10%);
  }
`; */

const SearchButton = styled.button`
  position: relative;
  margin-top: 48px;
  box-shadow: none;
  border: none;
  padding: 15px 74px 16px 45px;
  background: #ff9241;
  border-radius: 4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 33px;
  color: #ffffff;
  flex-grow: 0;
  transition: all 0.1s;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
    box-shadow: 0px 8px 25px 0 rgba(74, 74, 74, 0.22);
  }
  :active {
    background: #ff9a00;
  }
`;
const SearchButtonIcon = styled.span`
  position: absolute;
  display: flex;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

export default Search;
