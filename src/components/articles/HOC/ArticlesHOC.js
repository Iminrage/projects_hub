import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Earth from "../img/earth.png";
import logo from "../img/logo.png";
import ArticleHint from "../ArticleHint";

const ArticlesApp = WrappedComponent => {
  return props => {
    return (
      <PageWrapper>
        <ContentWrapper>
          <Header>
            <Container>
              <NewLink to={"/projects_hub/articles/"}>
                <Logo src={logo} width="268" />
              </NewLink>
            </Container>
          </Header>
          <Main>
            <ArticleHint />
            <Container>
              <PostsWrapper>
                <WrappedComponent {...props} />
              </PostsWrapper>
            </Container>
          </Main>
        </ContentWrapper>
        <Footer></Footer>
      </PageWrapper>
    );
  };
};

const NewLink = styled(Link)`
  transition: 0.3s all;
  border-radius: 10px 10px 0 0;
  color: white;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  :hover {
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }
`;
const Logo = styled.img``;
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Earth}) right bottom / auto no-repeat, black;
  display: flex;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
	flex-direction: column;
`;
const Header = styled.header`
  border-bottom: 1px solid white;
  padding: 20px 0;
  flex: 0 0 auto;
`;
const Main = styled.div`
  position: relative;
  flex: 1 0 auto;
`;
const Container = styled.div`
	padding: 0 400px;
	@media (max-width: 1700px) {
		padding: 0 300px;
  }
	@media (max-width: 1500px) {
		padding: 0 200px;
  }
	@media (max-width: 1000px) {
		padding: 0 75px;
  }
	@media (max-width: 550px) {
		padding: 0 25px;
  }
`;
const PostsWrapper = styled.div`
  padding: 40px 0;
	@media (max-width: 1000px) {
		padding: 0 10px;
  }
`;
const Footer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  border-top: 1px solid white;
`;

export default ArticlesApp;
