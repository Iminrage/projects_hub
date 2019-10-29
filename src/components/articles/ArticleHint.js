import React from "react";
import HintPop from "../HOC/HintPop";
import styled from "styled-components";

const ArticleHint = () => {
  return (
    <div className="">
      <HintText>
        Добро пожаловать в центр моих проектов!
        <br />
        Спасибо, что заглянули. Для перемещения по проектам откройте меню
        навигации в правом верхнем углу и с помощью стрелок выберите
        интересующий проект, и просто нажмите на ссылку.
        <br />
        <HintBText>Проекты находятся на стадии доработки</HintBText>
      </HintText>
    </div>
  );
};
const HintText = styled.p`
  color: #dcf1ff;
  text-align: center;
  padding: 20px 200px;
  margin: 0;
  @media (max-width: 1500px) {
    padding: 20px 400px;
  }
  @media (max-width: 1200px) {
    padding: 10px 200px;
  }
  @media (max-width: 1000px) {
    padding: 10px 50px;
  }
`;
const HintBText = styled.b`
  color: brown;
  display: inline-block;
  padding-top: 10px;
  text-transform: uppercase;
`;

export default HintPop(ArticleHint);