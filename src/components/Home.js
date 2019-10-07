import React, { Component } from "react";
import styled from "styled-components";
import Me from "./img/me.jpg";

class Home extends Component {
  state = {
    page: 1
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      let page = this.state.page + 1;
      page > 9 && (page = 1);
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
  render() {
    return (
      <HomePageContainer>
        <About>
          <AboutLeftCol>
            <AboutLeftColTexts>
              <PageText active={this.state.page === 1 && true}>
                Привет, я начинающий frontend разработчик!
              </PageText>
              <PageText active={this.state.page === 2 && true}>
                Я мечтаю вырасти в полноценного разработчика и уметь делать
                всякие крутые штуки. Последний год параллельно с завершением
                обучения в колледже (по направлению информационной безопасности)
                я стал изучать верстку.
              </PageText>
              <PageText active={this.state.page === 3 && true}>
                Сначала было совсем трудно и непонятно, но потом в голове стала
                формироваться общая картинка.
              </PageText>
              <PageText active={this.state.page === 4 && true}>
                Я не случайно выбрал frontend, как направление своего развития.
              </PageText>
              <PageText active={this.state.page === 5 && true}>
                Моя мать сколько я себя помню работала в этой сфере и поэтому
                уже на стадии изучения мне выпадала возможность верстать
                реальные коммерческие проекты.
              </PageText>
              <PageText active={this.state.page === 6 && true}>
                Так прошли мои первые 5-6 месяцев в сфере, но время шло, а на
                носу был диплом и прочие важные мероприятия на учебе, поэтому
                пришлось сделать перерыв.
              </PageText>
              <PageText active={this.state.page === 7 && true}>
                Вернувшись в строй через 4 месяца быстро стало понятно, что на
                простой верстке далеко не уедешь, Так я начал изучать JS.
              </PageText>
              <PageText active={this.state.page === 8 && true}>
                Быстро нашел стажировку в <a href="">Onpoint</a>, где научился
                очень многому в короткие сроки, но узкое направление работы
                Onpoint мне быстро наскучило и я понял, что нужно идти дальше.
              </PageText>
              <PageText active={this.state.page === 9 && true}>
                На данный момент я открыт для предложений.
              </PageText>
            </AboutLeftColTexts>
            <Pagination>
              <PaginationBtn
                data-action="reduce"
                onClick={this.handlePagination}
              >
                {"<"}
              </PaginationBtn>
              <Dot></Dot>
              <Dot></Dot>
              <Dot></Dot>
              <PaginationBtn
                data-action="increase"
                onClick={this.handlePagination}
              >
                {">"}
              </PaginationBtn>
            </Pagination>
          </AboutLeftCol>
          <AboutRightCol>
            <ImgMe src={Me} alt="" width="392" height="528" />
          </AboutRightCol>
        </About>
      </HomePageContainer>
    );
  }
}
const HomePageContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
  margin-top: 40px;
`;
const About = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid red;
  padding: 20px 200px;
`;
const AboutRightCol = styled.div`
  padding: 8px 10px;
  border: 1px solid grey;
  margin-left: 120px;
`;
const ImgMe = styled.img``;

const AboutLeftCol = styled.div``;

const PageText = styled.p`
  display: ${props => (props.active === true ? "block" : "none")};
`;
const AboutLeftColTexts = styled.div`
  display: flex;
  align-items: center;
  min-height: 400px;
  width: 300px;
`;

const Pagination = styled.div`
  margin-left: -10px;
`;

const PaginationBtn = styled.button`
  border-radius: 100%;
  padding: 0;
  width: 40px;
  height: 40px;
  border: 1px solid grey;
  background-color: transparent;
  color: grey;
  margin-left: 10px;
`;
const Dot = styled(PaginationBtn)`
  width: 10px;
  height: 10px;
`;

export default Home;
