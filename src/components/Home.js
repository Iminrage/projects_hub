import React from "react";
import styled from "styled-components";
import Me from "./img/me.jpg";

const Home = () => {
  return (
    <HomePageContainer>
      <About>
        {/* <p>
					Привет, я начинающий frontend разработчик!<br/>
					Я мечтаю вырасти в полноценного разработчика и уметь делать всякие крутые штуки
					Последний год параллельно с завершением обучения в колледже (по направлению информационной безопасности)
					я стал изучать верстку. Сначала было совсем трудно и непонятно, но потом в голове стала формироваться общая картинка.
					Я не случайно я выбрал frontend, как направление своего развития. Моя мать сколько я себя помню работала в этой сфере
					и поэтому уже на стадии изучения мне выпадала возможность верстать реальные коммерческие проекты. 
					Так прошли мои первые 5-6 месяцев в сфере, но время шло, а на носу был диплом и прочие важные мероприятия на учебе, 
					поэтому пришлось сделать перерыв. Вернувшись в строй через 4 месяца быстро стало понятно, что на простой верстке далеко не уедешь,
					Так я начал изучать JS. Быстро нашел стажировку в <a href="">Onpoint</a>, где научился очень многому в короткие сроки,
					но узкое направление работы Onpoint мне быстро наскучило и я понял, что нужно идти дальше.
					На данный момент я открыт для предложений.
				</p>
        <ImgContainer>
          <ImgMe src={Me} alt="" width="392" height="528" />
        </ImgContainer> */}
      </About>
    </HomePageContainer>
  );
};
const HomePageContainer = styled.div`
  width: 960px;
  margin: 0 auto;
  margin-top: 40px;
`;
const About = styled.div`
	display: flex;
	align-items: center;
`;
const ImgContainer = styled.div`
  padding: 8px 10px;
	border: 1px solid grey;
	margin-left: 120px;
`;
const ImgMe = styled.img``;

export default Home;
