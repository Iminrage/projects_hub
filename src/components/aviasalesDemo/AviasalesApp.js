import React, { useEffect } from "react";
import Search from "./Search";
import styled from "styled-components";

const AviasalesApp = () => {
	useEffect(()=>{
		document.title = "Aviasales Demo";
	})
  return (
    <div>
      <main>
        <SectSearch>
          <SectSearchFlexWrapper className="sect-search__search-form">
            <MainTitle>
              Пока что сломаный
              <br />
              Поиск дешевых авиабилетов
            </MainTitle>
            <MainTitleSub>Лучший способ купить авиабилеты дешево</MainTitleSub>
            <Search />
          </SectSearchFlexWrapper>
        </SectSearch>
      </main>
    </div>
  );
};

const SectSearch = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #2196f3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SectSearchFlexWrapper = styled.div`
  padding: 40px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  /*   justify-content: center;
  align-items: center; */
  align-content: center;
`;
const MainTitle = styled.h1`
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  text-align: center;

  color: #ffffff;
`;
const MainTitleSub = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 45px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  text-align: center;

  color: #ffffff;
`;

export default AviasalesApp;
