import React from "react";
import SelectType from "./selectType";
import styled from "styled-components";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValues: {
        dept: "",
        dest: "",
        today: "",
        recomendedBackDate: ""
      }
		};
  }
  componentDidMount() {
    /* TODO */
    let recomendedBackDate = "2019-10-02";
    let currentDate = "2019-09-27";
    let geoCity = "Москва";
    let newVals = this.state.inputValues;
    newVals = {
      ...newVals,
      dept: geoCity,
      today: currentDate,
      recomendedBackDate
    };
    this.setState({
      inputValues: newVals
    });
  }
  handleInputChange = event => {
    let val = event.target.value;
    console.log();
    let num = event.target.dataset.pos;
    const newVals = this.state.inputValues;
    newVals[num] = val;
    this.setState({ inputValues: newVals });
    console.log(this.state.inputValues);
  };
  handleSwap = () => {
		let newVals = this.state.inputValues;
		newVals = {
			...this.state.inputValues,
			dept: this.state.inputValues.dest,
			dest: this.state.inputValues.dept
		}
    console.log(newVals);
    this.setState({ inputValues: newVals });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputsWrapper>
          <MainInputWrapper>
            <MainSearchInputs
              type="text"
              placeholder={"Откуда"}
              data-pos={0}
              value={this.state.inputValues.dept}
              onChange={this.handleInputChange}
            />
          </MainInputWrapper>
          <Swap onClick={this.handleSwap} />
          <MainInputWrapper>
            <MainSearchInputs
              type="text"
              placeholder={"Куда"}
              data-pos={1}
              value={this.state.inputValues.dest}
              onChange={this.handleInputChange}
            />
          </MainInputWrapper>

          <MainSearchInputs
            type="date"
            data-pos={2}
            value={this.state.inputValues.today}
            onChange={this.handleInputChange}
          />
          <MainSearchInputs
            type="date"
            data-pos={3}
            value={this.state.inputValues.recomendedBackDate}
            onChange={this.handleInputChange}
          />
          <SelectType
            tripTypes={["1 пассажир, эконом", "2 пассажира, эконом"]}
          />
        </InputsWrapper>
        <SearchButton onClick={this.handleSubmit}>Найти билеты</SearchButton>
      </Form>
    );
  }
}

const MainSearchInputs = styled.input`
  border: none;
  box-shadow: none;
  box-sizing: border-box;
  padding: 18px 16px;
  margin: 0 1px;
  height: 56px;
  width: ${props => (props.type === "date" ? "180px" : "224px")};
  border-radius: ${props => (props.dataset === 0 ? "6px 0 0 6px" : null)};
  background: #ffffff;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #4a4a4a;
`;

const InputsWrapper = styled.div`
  display: flex;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;
const SearchButton = styled.button`
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
const Swap = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border: 1px solid red;
  top: 50%;
  border-radius: 15px;
  transform-origin: 50% 50%;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    transform: rotate(-45deg);
  }
`;
const MainInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default Search;
