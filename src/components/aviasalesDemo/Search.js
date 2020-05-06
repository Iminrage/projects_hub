import React, { useState, useEffect, useRef } from "react";
import SelectType from "./selectType";
import styled from "styled-components";
import AutoCompleteInput from "./AutoCompleteInput";
import DatePicker from "./DatePicker";

const Search = props => {
  const names = ["dept", "dest", "deptDate", "backDate"];
  const [focus, setFocus] = useState(0);
  const [render, reRender] = useState(null);
  const [valueStore, setValueStore] = useState({
    [names[0]]: {city: "Москва", code: "MOW"},
    [names[1]]: {city: "", code: ""},
    [names[2]]: "",
    [names[3]]: ""
  });
  const handleFocus = e => {
    setFocus(e);
    reRender(render + 1);
  };
  const saveValue = (name, value, code) => {
    if (code) {
      setValueStore({ ...valueStore, [name]: {city: value, code} });
    } else {
			setValueStore({ ...valueStore, [name]: {city: value, code: ""} });
		}
  };
  const handleSwap = () => {
    setValueStore({
      ...valueStore,
      [names[0]]: valueStore[names[1]],
      [names[1]]: valueStore[names[0]]
    });
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
          <InputDest>
            <AutoCompleteInput
              name={names[1]}
              pos={1}
              focused={focus === 1 && true}
              changeValue={saveValue}
							value={valueStore[names[1]].city}
							code={valueStore[names[1]].code}
              tryFocus={handleFocus}
              placeholder={"Куда"}
            />
          </InputDest>
          <InputDept>
            <AutoCompleteInput
              name={names[0]}
              pos={0}
              focused={focus === 0 && true}
              changeValue={saveValue}
							value={valueStore[names[0]].city}
							code={valueStore[names[0]].code}
              tryFocus={handleFocus}
              placeholder={"Откуда"}
            />
            <Swap onClick={handleSwap}>
              <SwapCircle></SwapCircle>
              <SwapArrowL>
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 8L0 4L5 0V3H16V5H5V8Z"
                    fill="#1BA6D2"
                  />
                </svg>
              </SwapArrowL>
              <SwapArrowR>
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 0L16 4L11 8V5L0 5V3L11 3V0Z"
                    fill="#1BA6D2"
                  />
                </svg>
              </SwapArrowR>
            </Swap>
          </InputDept>
        </CityInputs>
        <OtherInputs>
          <DateInputs>
            <DateBack>
              <DatePicker
                name={names[3]}
                pos={3}
                focused={focus === 3 && true}
                changeValue={saveValue}
                value={valueStore[names[3]]}
                tryFocus={handleFocus}
                placeholder={"Обратно"}
              />
            </DateBack>
            <DateDept>
              <DatePicker
                name={names[2]}
                pos={2}
                focused={focus === 2 && true}
                changeValue={saveValue}
                value={valueStore[names[2]]}
                tryFocus={handleFocus}
                placeholder={"Туда"}
              />
            </DateDept>
          </DateInputs>
          <Select>
            <SelectType
              tripTypes={["1 пассажир, эконом", "2 пассажира, эконом"]}
            />
          </Select>
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
const InputsWrapper = styled.div`
  display: flex;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

const CityInputs = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-basis: 50%;
  @media (max-width: 640px) {
    flex-direction: column-reverse;
  }
`;

const InputDept = styled.div`
  position: relative;
  flex-basis: 50%;
  margin: 1px;
`;
const InputDest = styled.div`
  flex-basis: 50%;
  margin: 1px;
`;
const OtherInputs = styled.div`
  display: flex;
  flex-basis: 50%;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const DateInputs = styled.div`
  display: flex;
	flex-direction: row-reverse;
  flex-basis: 60%;
`;
const DateDept = styled.div`
  flex-basis: 50%;
  margin: 1px;
`;
const DateBack = styled.div`
  flex-basis: 50%;
  margin: 1px;
`;
const Select = styled.div`
  flex-basis: 40%;
  margin: 1px;
`;

const Swap = styled.div`
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
`;
const SwapArrow = styled.span`
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
`;
const SwapArrowR = styled(SwapArrow)`
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
`;

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
