import React from "react";
import Search from "./Search";
import styled from "styled-components";

const SectSearch = styled.section`
  width: 100%;
  height: 100vh;
  background: #2196f3;
`;
const SectSearchFlexWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

class AviasalesApp extends React.Component {
  render() {
    return (
      <div>
        <main>
          <SectSearch>
            <SectSearchFlexWrapper className="sect-search__search-form">
              <MainTitle>Поиск дешевых авиабилетов</MainTitle>
              <MainTitleSub>
                Лучший способ купить авиабилеты дешево
              </MainTitleSub>
              <Search />
            </SectSearchFlexWrapper>
          </SectSearch>
        </main>
      </div>
    );
  }
}

export default AviasalesApp;
