import React, { useEffect } from "react";
import Logo from "./img/logo.png";
import ImgOfSix from "./img/imgOfSix.png";
import Green from "./img/green.png";
import styled from "styled-components";
import Foot from "./img/foot.png";

const Task3 = () => {
	useEffect(()=>{
		document.title = "Layout Demo";
	})
  return (
    <Task3Wrapper>
      <ContentContainer>
        <Header>
          <ImgLogo
            src={Logo}
            alt="Картинка разрешением в 122х108"
            width="122"
            height="108"
          />
          <HeaderBlankItem></HeaderBlankItem>
          <HeaderContacts>
            <ContactsUl>
              <Li>
                <A href="tel:+74993462131">+7 (499) 346-21-31</A>
              </Li>
              <Li>
                <A href="mailto:manager@pixelplus.ru">manager@pixelplus.ru</A>
              </Li>
              <Li>
                <A href="www.pixelplus.ru">www.pixelplus.ru</A>
              </Li>
            </ContactsUl>
          </HeaderContacts>
        </Header>
        <Main>
          <MainWrapper>
            <Aside>
              <Menu>
                <MenuUl>
                  <BoldLi>
                    <A href="#">Создание сайтов</A>
                  </BoldLi>
                  <Li>
                    <A href="#">Изготовление сайтов «под ключ»</A>
                  </Li>
                  <Li>
                    <A href="#">Как мы работаем</A>
                  </Li>
                  <Li>
                    <A href="#">Интеграция с 1С</A>
                  </Li>
                  <Li>
                    <A href="#">Поддержка сайтов</A>
                  </Li>
                  <Li>
                    <A href="#">Создание сайтов на Битрикс</A>
                  </Li>
                  <Li>
                    <A href="#">Модули Битрикс</A>
                  </Li>
                  <Li>
                    <A href="#">Купить Битрикс</A>
                  </Li>
                  <Li>
                    <A href="#">Дизайн сайтов</A>
                  </Li>
                  <Li>
                    <A href="#">Интернет-магазины</A>
                  </Li>
                  <Li>
                    <A href="#">Создание логотипов</A>
                  </Li>
                </MenuUl>
              </Menu>
              <AsideImg
                src={Green}
                alt="Картинка разрешением в 184x134"
                width="184"
                height="134"
              />
            </Aside>
            <MainContentWrapper>
              <Task>
                <TaskText>
                  Описание задания и требования: A). Центральная область шириной
                  960 пикселей + отступы, при этом верстка должна быть
                  оптимизирована под минимальное разрешение 1024 пикселя, а
                  значит область без горизонтальной прокрутки должна составлять
                  не более 1008 пикселей. При разрешении экрана менее 1024
                  пикселей макет не должен собираться “в кучу”, при разрешении
                  более 1024 пикселей макет не должен растягиваться. B).
                  Основные блоки сайта head, content (left и center), footer
                  должны быть самостоятельными. То есть при удалении какого-либо
                  блока верстка не должна распадаться. При удалении блока
                  content верхняя и нижняя части макета должны быть прижаты к
                  верху и к низу окна браузера соответственно. C). Изменение
                  размеров и/или удаление одного из блоков 1, 2 или 3 не должно
                  влиять на другие блоки области header. D). Блоки от 2 до 5 и
                  от 8 до 12 должны быть выполнены в виде div областей. E). Блок
                  1, 6, 7, 13 - должны быть выполнены в виде картинок
                  (обязательно наличие width, height, alt и title для каждой
                  картинки). F). Блок 6 - должен быть выполнен таким образом,
                  чтобы при добавлении и/или удалении любого количества
                  аналогичных блоков верстка не должна ехать. При этом
                  добавление и/или удаление этих блоков должно быть простым. G).
                  Блок 7 - должен быть прижат к нижней части области left. H).
                  Текстовое содержимое блоков 4, 10, 11 должно быть выполнено в
                  виде списков. При этом особое внимание будет уделяться
                  поведению блоков при добавлении/удалении/изменении пунктов
                  списка.
                </TaskText>
              </Task>
              <ImgSixWrapper>
                <ImgSix
                  src={ImgOfSix}
                  alt="Картинка разрешением в 133x153"
                  width="133"
                  height="153"
                />
                <ImgSix
                  src={ImgOfSix}
                  alt="Картинка разрешением в 133x153"
                  width="133"
                  height="153"
                />
                <ImgSix
                  src={ImgOfSix}
                  alt="Картинка разрешением в 133x153"
                  width="133"
                  height="153"
                />
                <ImgSix
                  src={ImgOfSix}
                  alt="Картинка разрешением в 133x153"
                  width="133"
                  height="153"
                />
                <ImgSix
                  src={ImgOfSix}
                  alt="Картинка разрешением в 133x153"
                  width="133"
                  height="153"
                />
                <ImgSix
                  src={ImgOfSix}
                  alt="Картинка разрешением в 133x153"
                  width="133"
                  height="153"
                />
                <ImgSix
                  src={ImgOfSix}
                  alt="Картинка разрешением в 133x153"
                  width="133"
                  height="153"
                />
                <ImgSix
                  src={ImgOfSix}
                  alt="Картинка разрешением в 133x153"
                  width="133"
                  height="153"
                />
                <ImgSix
                  src={ImgOfSix}
                  alt="Картинка разрешением в 133x153"
                  width="133"
                  height="153"
                />
                <ImgSix
                  src={ImgOfSix}
                  alt="Картинка разрешением в 133x153"
                  width="133"
                  height="153"
                />
              </ImgSixWrapper>
              <AboutWrapper>
                <About>
                  <AboutText>
                    Студия «Пиксель Плюс» разработает полнофункциональный
                    продукт ориентированный на целевую аудиторию и эффективно
                    решающий поставленные перед ним маркетинговые задачи. Опыт
                    работ и использование собственных технологий, позволяет
                    предлагать услугу изготовления сайта в Москве в разумные
                    сроки.
                  </AboutText>
                </About>
                <About>
                  <AboutText>
                    Поисковое продвижение (раскрутка) ведется по коммерческим
                    запросам, что позволяет многократно увеличить количество
                    продаж с сайта при разумном рекламном бюджете.
                  </AboutText>
                </About>
              </AboutWrapper>
            </MainContentWrapper>
          </MainWrapper>
        </Main>
      </ContentContainer>
      <Footer>
        <FooterList>
          <FooterUlCol>
            <ColLi>
              <A href="#">1. пункт</A>
            </ColLi>
            <ColLi>
              <A href="#">2. пункт</A>
            </ColLi>
            <ColLi>
              <A href="#">3. пункт</A>
            </ColLi>
            <ColLi>
              <A href="#">4. пункт</A>
            </ColLi>
            <ColLi>
              <A href="#">5. пункт</A>
            </ColLi>
            <ColLi>
              <A href="#">5. пункт</A>
            </ColLi>
            <ColLi>
              <A href="#">7. пункт</A>
            </ColLi>
            <ColLi>
              <A href="#">8. пункт</A>
            </ColLi>
            <ColLi>
              <A href="#">9. пункт</A>
            </ColLi>
            <ColLi>
              <A href="#">10. пункт</A>
            </ColLi>
          </FooterUlCol>
        </FooterList>
        <FooterList>
          <FooterUlRow>
            <RowLi>
              <A href="#">1. пункт</A>
            </RowLi>
            <RowLi>
              <A href="#">2. пункт</A>
            </RowLi>
            <RowLi>
              <A href="#">3. пункт</A>
            </RowLi>
            <RowLi>
              <A href="#">4. пункт</A>
            </RowLi>
            <RowLi>
              <A href="#">5. пункт</A>
            </RowLi>
            <RowLi>
              <A href="#">5. пункт</A>
            </RowLi>
            <RowLi>
              <A href="#">7. пункт</A>
            </RowLi>
            <RowLi>
              <A href="#">8. пункт</A>
            </RowLi>
            <RowLi>
              <A href="#">9. пункт</A>
            </RowLi>
            <RowLi>
              <A href="#">10. пункт</A>
            </RowLi>
          </FooterUlRow>
        </FooterList>
        <FooterBlock>
          <div className=""></div>
          <FooterImg src={Foot} alt="Картинка разрешением в 308x77" />
        </FooterBlock>
      </Footer>
    </Task3Wrapper>
  );
}

const Task3Wrapper = styled.div`
  min-height: 100vh;
  width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: auto;
    padding: 0 50px;
  }
	@media (max-width: 500px) {
    padding: 0 10px;
  }
`;
const ContentContainer = styled.div`
  flex: 1 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 0 19px;
  border-bottom: 1px solid #777777;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;
const ImgLogo = styled.img`
  align-self: flex-start;
  @media (max-width: 1024px) {
    margin: 5px;
  }
`;
const HeaderBlankItem = styled.div`
  margin-left: 23px;
  flex-grow: 1;
  flex-shrink: 0;
  min-height: 108px;
  width: 279px;
  background-color: #777777;
  @media (max-width: 1024px) {
    flex-shrink: 1;
    margin-left: 0;
    margin: 5px;
  }
`;
const HeaderContacts = styled(HeaderBlankItem)`
  width: 513px;
  @media (max-width: 1024px) {
    flex-basis: 513px;
  }
`;
const ContactsUl = styled.ul`
  margin: 0;
  padding: 22px;
  text-align: right;
`;
const Li = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const A = styled.a`
  text-decoration: none;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14;
  line-height: 22px;
`;

const Main = styled.main`
  flex: 1 0 auto;
  padding: 22px 0;
  border-bottom: 1px solid #777777;
  margin-bottom: 23px;
`;
const MainWrapper = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;
const Aside = styled.aside`
  margin-right: 20px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  @media (max-width: 1024px) {
    margin-right: 0;
    width: 100%;
    margin-bottom: 20px;
  }
`;
const Menu = styled.div`
  width: 184px;
  background-color: #777777;
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    flex-grow: 1;
    width: auto;
  }
`;
const MenuUl = styled.ul`
  margin: 0;
  padding: 20px 14px;
  text-align: left;
  box-sizing: border-box;
`;
const BoldLi = styled(Li)`
  font-weight: 600;
`;
const AsideImg = styled.img`
  @media (max-width: 1024px) {
    margin: 10px auto;
  }
`;
const ImgSixWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: -10px;
  margin-left: -10px;
  margin-bottom: 18px;
	@media (max-width: 500px) {
    margin: 10px auto;
		flex-grow: 1;
  }
`;
const ImgSix = styled.img`
  flex-grow: 0;
  flex-shrink: 0;
  margin: 10px;
	@media (max-width: 500px) {
    margin: 10px auto;
  }
`;

const Task = styled.div`
  padding: 22px;
  margin-bottom: 19px;
  background-color: #dcdcdc;
`;

const TaskText = styled.div`
  margin: 0;
`;

const MainContentWrapper = styled.div``;

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
	@media (max-width: 1024px) {
   flex-wrap: wrap; 
  }
`;
const About = styled.div`
  background-color: #dcdcdc;
  width: 370px;
  padding: 23px;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    width: auto;
    flex-basis: 370px;
    flex-shrink: 1;
    box-sizing: content-box;
		margin: 5px auto;
  }
	
`;
const AboutText = styled.p`
  margin: 0;
`;
const Footer = styled.footer`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding-bottom: 25px;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;
const FooterList = styled.div`
  width: 298px;
  margin-right: 28px;
  background-color: #777777;
  @media (max-width: 1024px) {
		margin: 5px auto;
  }
`;
const FooterUlRow = styled.ul`
  margin: 0;
  padding: 14px 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const FooterUlCol = styled.ul`
  margin: 0;
  padding: 14px 20px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`;

const ColLi = styled(Li)``;

const RowLi = styled(Li)`
  width: 100%;
`;

const FooterBlock = styled.div`
  @media (max-width: 1024px) {
    margin: 5px auto;
  }
`;

const FooterImg = styled.img`
  @media (max-width: 1024px) {
    max-width: 100%;
		height: auto;
  }
`;

export default Task3;
