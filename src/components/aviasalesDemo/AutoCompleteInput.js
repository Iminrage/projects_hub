import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const AutoCompleteInput = props => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (props.focused) {
      inputRef.current.focus();
    }
  });
  const handleInsert = e => {
    /* conrols input, stores value to the parent */
    props.changeValue(props.name, e.target.value);
  };
  const [iata, setIata] = useState([]);
  useEffect(() => {
    /* fetchs data any time props.value updates */
    if (props.value.length) {
      (async () => {
        let response = await fetch(
          `http://autocomplete.travelpayouts.com/places2?term=${props.value}&locale=ru&types[]=city`
        );
        if (response.ok) {
          let json = await response.json();
          setIata(json.slice(0, 5));
        } else {
          console.log("error", response.status);
        }
      })();
    } else {
      setIata([]);
    }
  }, [props.value]);
  const termination = isFocus => {
    /* sets input value to choosen, clears fetch response, strikes focus func, stores selected value to the parent */
    /* setInputValue(iata[selected].name); */
    if (iata.length) {
      if (iata[selected].code) {
        props.changeValue(props.name, iata[selected].name, iata[selected].code);
      } else {
        props.changeValue(props.name, iata[selected].name);
      }
      setIata([]);
    }
    if (isFocus) {
      props.tryFocus(props.pos + 1);
    } else {
      props.tryFocus(-1);
		}
		setSelected(0);
  };
  const focusing = () => {
    /* force focus */
    props.tryFocus(props.pos);
  };
  const preventer = e => {
    /* prevents mouseDown to keep focus on input */
    e.preventDefault();
  };
  const handleBlur = () => {
    /* clears fetch response, blur input */
    setIata([]);
    props.tryFocus(-1);
  };
  const [selected, setSelected] = useState(0);
  /* controls selected drop down item, stores selected value to the parent*/
  const handleChase = e => {
    /* set selected item... */
    if (e.keyCode) {
      /* with keyboard */
      if (e.keyCode === 38 || e.keyCode === 40) {
        e.preventDefault();
        if (e.keyCode === 38) {
          selected === 0
            ? setSelected(iata.length - 1)
            : setSelected(selected - 1);
        } else {
          selected === iata.length - 1
            ? setSelected(0)
            : setSelected(selected + 1);
        }
      }
      if (e.keyCode === 13 || e.keyCode === 9 || e.keyCode === 27) {
        e.preventDefault();
        if (e.keyCode === 13 || e.keyCode === 9) {
          if (props.value.length) {
            termination(true);
          }
        } else {
          termination(false);
          e.target.blur();
        }
      }
    } else {
      /* with mouse */
      setSelected(+e.target.dataset.key);
    }
  };
  return (
    <InputWrapper>
      {iata.length > 0 && props.focused && (
        <AutoList>
          {iata.map((e, idx) => {
            return (
              <AutoKey
                key={idx}
                data-key={idx}
                isLast={idx === iata.length - 1}
                onMouseDown={preventer}
                onClick={termination}
                onMouseEnter={handleChase}
                selected={idx === selected}
              >
                <AKeyData>
                  {e.name}
                  <Country>, {e.country_name}</Country>{" "}
                </AKeyData>
                <ACode>{e.code}</ACode>
              </AutoKey>
            );
          })}
        </AutoList>
      )}
      <Input
        ref={inputRef}
        type="text"
        name={props.name}
        value={props.value}
        onChange={handleInsert}
        autoComplete="off"
        onFocus={focusing}
        onBlur={handleBlur}
        onKeyDown={handleChase}
      />
      {props.value.length === 0 && (
        <Label focused={props.focused}>{props.placeholder}</Label>
      )}
      <Code>{props.code}</Code>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
const Input = styled.input`
  position: relative;
  border: none;
  width: 100%;
  box-shadow: none;
  box-sizing: border-box;
  padding: 18px 16px;
  height: 56px;
  border-radius: ${props => props.name === "dept" && "6px 0 0 6px"};
  background: #ffffff;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #4a4a4a;
  :focus {
    box-shadow: 0 0 0 2px #ff6d00;
    outline: none;
  }
`;
const Label = styled.label`
  position: absolute;
  pointer-events: ${props => (props.focused ? "auto" : "none")};
  left: 20px;
  top: ${props => (props.focused ? "-20px" : "50%")};
  transform: ${props => (props.focused ? "0" : "translateY(-50%)")};
  user-select: ${props => (props.focused ? "auto" : "none")};
  font-size: ${props => (props.focused ? "12px" : "16px")};
  color: ${props => (props.focused ? "white" : "#A0B0B9")};
  transition: 0.2s all;
`;
const AutoList = styled.ul`
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  width: 300px;
  margin: 0;
  padding: 0;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.75);
`;
const AutoKey = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 10px;
  cursor: pointer;
  user-select: none;
  background: ${props => (props.selected ? "#f2fcff" : "#ffffff")};
  border-bottom: 1px solid #dfe5ec;
  border-radius: ${props => props.isLast && "0 0 6px 6px"};
`;
const AKeyData = styled.span`
  pointer-events: none;
`;
const ACode = styled(AKeyData)`
  color: gray;
`;
const Country = styled.span`
  color: #a0b0b9;
`;
const Code = styled.span`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  font-size: 12px;
  color: #a0b0b9;
	pointer-events: none;
`;
export default AutoCompleteInput;
