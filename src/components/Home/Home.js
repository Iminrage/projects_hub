import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import LinksPop from "./LinksPop";
import Hint from "./Hint"
import Bg from "../img/bg.jpg";

class Home extends Component {
  state = {
    page: 1,
    hintIsOpen: true
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      let page = this.state.page + 1;
      page > 8 && clearInterval(this.interval);
      this.setState({ page: page });
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handlePagination = e => {
    clearInterval(this.interval);
    if (e.target.dataset.action === "increase") {
      let page = this.state.page + 1;
      page > 9 && (page = 1);
      this.setState({ page: page });
    } else if (e.target.dataset.action === "reduce") {
      let page = this.state.page - 1;
      page < 1 && (page = 9);
      this.setState({ page: page });
    }
  };
  handleDot = e => {
    clearInterval(this.interval);
    const current = +e.target.dataset.state;
    this.setState({ page: current });
  };
  render() {
    return (
      <HomePageContainer>
        <About>
          <AboutGreeting>Привет, я Егор Шевчук</AboutGreeting>
          <AboutRowTexts>
            <PageText
              active={this.state.page === 1 && true}
              onClick={() => {
                clearInterval(this.interval);
              }}
            >
              Я начинающий frontend разработчик!
            </PageText>
            <PageText
              active={this.state.page === 2 && true}
              onClick={() => {
                clearInterval(this.interval);
              }}
            >
              Я мечтаю вырасти в полноценного разработчика и уметь делать всякие
              крутые штуки. Последний год параллельно с завершением обучения в
              колледже (по направлению информационной безопасности) я стал
              изучать верстку.
            </PageText>
            <PageText
              active={this.state.page === 3 && true}
              onClick={() => {
                clearInterval(this.interval);
              }}
            >
              Сначала было совсем трудно и непонятно, но потом в голове стала
              формироваться общая картинка.
            </PageText>
            <PageText
              active={this.state.page === 4 && true}
              onClick={() => {
                clearInterval(this.interval);
              }}
            >
              Я не случайно выбрал frontend, как направление своего развития.
            </PageText>
            <PageText
              active={this.state.page === 5 && true}
              onClick={() => {
                clearInterval(this.interval);
              }}
            >
              Моя мама, сколько я себя помню, работала в этой сфере и поэтому
              уже на стадии изучения мне выпадала возможность верстать реальные
              коммерческие проекты.
            </PageText>
            <PageText
              active={this.state.page === 6 && true}
              onClick={() => {
                clearInterval(this.interval);
              }}
            >
              Так прошли мои первые 5-6 месяцев в сфере, но время шло, а на носу
              был диплом и прочие важные мероприятия на учебе, поэтому пришлось
              сделать перерыв.
            </PageText>
            <PageText
              active={this.state.page === 7 && true}
              onClick={() => {
                clearInterval(this.interval);
              }}
            >
              Вернувшись в строй через 4 месяца быстро стало понятно, что на
              простой верстке далеко не уедешь. Так я начал изучать JS.
            </PageText>
            <PageText
              active={this.state.page === 8 && true}
              onClick={() => {
                clearInterval(this.interval);
              }}
            >
              Быстро нашел стажировку в{" "}
              <ALink href="https://onpoint.ru/">Onpoint</ALink>, где научился
              очень многому в короткие сроки, но узкое направление работы
              Onpoint мне быстро наскучило и я понял, что нужно идти дальше.
            </PageText>
            <PageText
              active={this.state.page === 9 && true}
              onClick={() => {
                clearInterval(this.interval);
              }}
            >
              На данный момент я открыт для предложений.
            </PageText>
          </AboutRowTexts>
          <Pagination>
            <PaginationBtn data-action="reduce" onClick={this.handlePagination}>
              {"<"}
            </PaginationBtn>
            <Dot
              data-state={1}
              active={this.state.page <= 3}
              onClick={this.handleDot}
            ></Dot>
            <Dot
              data-state={4}
              active={this.state.page <= 6 && this.state.page > 3}
              onClick={this.handleDot}
            ></Dot>
            <Dot
              data-state={7}
              active={this.state.page > 6}
              onClick={this.handleDot}
            ></Dot>
            <PaginationBtn
              data-action="increase"
              onClick={this.handlePagination}
            >
              {">"}
            </PaginationBtn>
          </Pagination>
        </About>
        <Hint></Hint>
        
        <LinksPop></LinksPop>
      </HomePageContainer>
    );
  }
}
const widthGrow = keyframes`
	from{
		transform: scale3d(0, 1, 1);
	}
	to{
		transform: scale3d(1, 1, 1);
	}
`;

const fadeIn = keyframes`
	from{
		opacity: 0;
	}
	to{
		opacity: 1;
	}
`;
const HomePageContainer = styled.div`
  background: url(${Bg}) center center / cover no-repeat;
  padding: 0 400px;
	@media (max-width: 1500px) {
		padding: 0 200px;
  }
	@media (max-width: 1200px) {
		padding: 0 100px;
  }
	@media (max-width: 640px) {
		padding: 0 0;
  }
`;

const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const AboutGreeting = styled.h2`
  margin: 0;
  margin-bottom: 40px;
  padding: 0;
  color: #dcf1ff;
  font-family: "PT Sans Bold", sans-serif;
	font-size: 26px;
	text-shadow: 2px 3px 6px rgba(0,0,0,0.63);
  text-transform: uppercase;
  transform-origin: 0 100%;
  animation: ${widthGrow} 0.5s both 0.3s;
	@media (max-width: 640px) {
		font-size: 18px;
		margin-bottom: 15px;
  }
`;

const AboutRowTexts = styled.div`
  display: flex;
  width: 100%;
  min-height: 200px;
  padding: 20px 200px;
  box-sizing: border-box;
  margin-bottom: 40px;
  justify-content: center;
	align-items: center;
  color: #dcf1ff;
  background-color: rgba(0, 0, 0, 0.2);
	@media (max-width: 1500px) {
		padding: 20px 100px;
  }
	@media (max-width: 1200px) {
		padding: 10px 50px;
  }
	@media (max-width: 640px) {
		padding: 10px 30px;
		margin-bottom: 15px;
  }
	
`;
const PageText = styled.p`
  text-align: center;
	text-shadow: 1px 1px 6px rgba(0,0,0,0.63);
  display: ${props => (props.active === true ? "block" : "none")};
  animation: ${fadeIn} 0.5s both;
`;
const ALink = styled.a`
  color: #dcf1ff;
  :hover {
    color: #acffaa;
  }
`;

const Pagination = styled.div`
  margin-left: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationBtn = styled.button`
  border-radius: 100%;
  padding: 0;
  width: 40px;
  height: 40px;
  border: 1px solid #dcf1ff;
  color: #dcf1ff;
  margin-left: 10px;
  cursor: pointer;
  background-color: ${props =>
    props.active === true ? "#dcf1ff" : "transparent"};
  :focus {
    outline: none;
    border-color: orange;
  }
`;
const Dot = styled(PaginationBtn)`
  width: 10px;
  height: 10px;
`;



export default Home;
