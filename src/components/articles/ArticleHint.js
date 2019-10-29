import React from "react";
import HintPop from "../HOC/HintPop";
import styled from "styled-components";

const ArticleHint = () => {
  return (
    <div className="">
      <HintText>
        Данный мини-проект был создан в рамках тестового задания для SKYTRACK{" "}
        <br />
        Задание заключалось в создании списка заголовков статей по нажатию на
        которые, с помощью библиотеки <HintTextHighlighted>reat-router</HintTextHighlighted> откравалась сама статья, в
        которой помимо текста, должна находиться секция комментариев. В работе
        было необходимо использовать <HintTextHighlighted>redux</HintTextHighlighted>, о котором на момент получения
        задачи, я только слышал.
        <br />
        Здесь представлен результат с некоторыми доработками.
      </HintText>
    </div>
  );
};
const HintText = styled.p`
  color: #dcf1ff;
  text-align: center;
  padding: 20px 200px;
  margin: 0;
	background: #000;
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
const HintTextHighlighted = styled.span`
	color: red;
`;
const HintBText = styled.b`
  color: brown;
  display: inline-block;
  padding-top: 10px;
  text-transform: uppercase;
`;

export default HintPop(ArticleHint);
