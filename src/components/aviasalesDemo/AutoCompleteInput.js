import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const AutoCompleteInput = props => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (props.focused) {
      inputRef.current.focus();
    }
  });
  const [inputValue, setInputValue] = useState("");
  const handleInsert = e => {
    /* conrols input, stores value to the parent */
/*     setInputValue(e.target.value); */
    props.changeValue(props.name, e.target.value);
  };
  const [iata, setIata] = useState([]);
  useEffect(() => { /* props.value */
    /* fetchs data any time inputsValue updates */
    if (props.value.length) {
      (async () => {
				console.log("requested!!");
				
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
  const termination = e => {
    /* sets input value to choosen, clears fetch response, strikes focus func, stores selected value to the parent */
    /* setInputValue(iata[selected].name); */
    props.changeValue(props.name, iata[selected].name);
    setIata([]);
    props.tryFocus(props.pos + 1);
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
  const [selected, setSelected] = useState(
    0
  ); /* controls selected drop down item, stores selected value to the parent*/
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
          if (iata.length) {
            setInputValue(iata[selected].name);
            props.changeValue(props.name, iata[selected].name);
						setIata([]);
						console.log(props.pos);
						
            props.tryFocus(props.pos + 1);
          }
        }
      }
    } else {
      /* with mouse */
      setSelected(+e.target.dataset.key);
    }
  };
  return (
    <InputWrapper>
      <Input
        ref={inputRef}
        type="text"
        value={props.value}
        onChange={handleInsert}
        autoComplete="off"
        onFocus={focusing}
        onBlur={handleBlur}
        onKeyDown={handleChase}
      />
      {iata.length > 0 && props.focused && (
        <AutoList>
          {iata.map((e, idx) => {
            return (
              <AutoKey
                key={idx}
                data-key={idx}
                onMouseDown={preventer}
                onClick={termination}
                onMouseEnter={handleChase}
                selected={idx === selected}
              >
                <AKeyData>{e.name}</AKeyData>
                <AKeyData>{e.country_code}</AKeyData>
              </AutoKey>
            );
          })}
        </AutoList>
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
  box-shadow: none;
  box-sizing: border-box;
  padding: 18px 16px;
  margin: 0 1px;
  height: 56px;

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
const AutoList = styled.ul`
  display: block;
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
export default AutoCompleteInput;
