import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Week from "./Week"

const DatePicker = props => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (props.focused) {
      inputRef.current.focus();
    }
  });
  const preventer = e => {
    /* prevents mouseDown to keep focus on input */
    e.preventDefault();
  };
  const handleClick = e => {
    e.preventDefault();
  };

  const focusing = () => {
    /* force focus */
    props.tryFocus(props.pos);
  };
  const handleInsert = () => {};
  const handleBlur = () => {
    /* blur input */
    props.tryFocus(-1);
  };

  const [startDate, setStartDate] = useState(new Date());

  return (
    <InputWrapper>
      <Input
        type="text"
        autoComplete="off"
        ref={inputRef}
        name={props.name}
        onChange={handleInsert}
        value={props.value}
        onFocus={focusing}
        onBlur={handleBlur}
        placeholder={props.placeholder}
      />
      {props.pos === 2 && (
        <IconCalendar>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20">
            <path
              d="M14 11H9v5h5v-5zM13 0v2H5V0H3v2H2C.89 2 .01 2.9.01 4L0 18a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-1V0h-2zm3 18H2V6h14v12z"
              fill="#2196F3"
            />
          </svg>
        </IconCalendar>
      )}
      {props.focused && (
        <Dates>
          <DatesSide>
            <DatesTab
              onClick={handleClick}
              onMouseDown={preventer}
              onMouseUp={preventer}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20">
                <path
                  d="M14 11H9v5h5v-5zM13 0v2H5V0H3v2H2C.89 2 .01 2.9.01 4L0 18a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-1V0h-2zm3 18H2V6h14v12z"
                  fill={"#90A4AE" || "#2196F3"}
                />
              </svg>
              <span>Выбрать даты</span>
            </DatesTab>
            <DatesTab
              onClick={handleClick}
              onMouseDown={preventer}
              onMouseUp={preventer}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20">
                <path
                  d="M6 8H4v2h2V8zm4 0H8v2h2V8zm4 0h-2v2h2V8zm-8 3H4v2h2v-2zm4 0H8v2h2v-2zm4 0h-2v2h2v-2zm-8 3H4v2h2v-2zm4 0H8v2h2v-2zm4 0h-2v2h2v-2zm2-12h-1V0h-2v2H5V0H3v2H2C.89 2 .01 2.9.01 4L0 18a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16H2V6h14v12z"
                  fill={"#90A4AE"}
                />
              </svg>
              <span>Выбрать месяц</span>
            </DatesTab>
          </DatesSide>
          <DatesBody>
            <MonthesChase>
							<Week week={[1,2,3,4,5,6,7]}/>
							<Week week={[1,2,3,4,5,6,7]}/>
							<Week week={[1,2,3,4,5,6,7]}/>
							<Week week={[1,2,3,4,5,6,7]}/>
            </MonthesChase>
            {/* <DatesChase></DatesChase> */}
          </DatesBody>
        </Dates>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
const Input = styled.input`
  border: none;
  width: 100%;
  box-shadow: none;
  box-sizing: border-box;
  padding: 18px 16px;
  height: 56px;
  background: #ffffff;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: transparent;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #a0b0b9;
  }
`;
const IconCalendar = styled.span`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`;
const Dates = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
`;
const DatesSide = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafcfd;
`;
const DatesTab = styled.button`
  width: 95px;
  border: none;
  background: transparent;
  border-bottom: 1px solid #fafcfd;
  color: #535353;
  cursor: pointer;
`;
const DatesBody = styled.div`
  padding: 20px;
  background-color: #fff;
`;
const MonthesChase = styled.div``;
const Table = styled.table``;

export default DatePicker;
