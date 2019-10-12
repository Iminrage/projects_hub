import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home(props) {
  console.log(props);
  const { posts } = props;
  const postsList = props.posts.length ? (
    posts.map(post => {
      return (
        <PostLinkWrapper key={post.id}>
          <NewLink to={"/projects_hub/" + post.id}>
            <ExtraContent></ExtraContent>
            <TextContent>
              <PostHeading>{post.title}</PostHeading>
              <PostText>{post.body.slice(0, 255) + "..."}</PostText>
            </TextContent>
          </NewLink>
        </PostLinkWrapper>
      );
    })
  ) : (
    <div className="">No posts yet</div>
  );
  return (
    <div className="">
      <PostsWrapper>{postsList}</PostsWrapper>
      <Hint>
        <HintText>
          Данный небольшой проект был сделан в рамках тестового задания для
          компании SKYTRACK. Задание было следующим: 
					приложение представляет из себя список заголовков
          статей, при клике на статью должна открываться сама статья (react-router) для чтения, при клике на кнопку «Открыть комментарий»
          должен открываться список всех комментариев этой статьи. <br/>
          <HintBText>Проекты находятся на стадии доработки</HintBText>
        </HintText>
      </Hint>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const PostLinkWrapper = styled.div`
  margin-bottom: 30px;
`;
const PostHeading = styled.h2`
  padding: 5px 100px 10px 150px;
  color: black;
`;
const NewLink = styled(Link)`
  display: flex;
  border: 1px solid grey;
  text-decoration: none;
`;
const PostText = styled.p`
  padding: 0 100px 20px 100px;
  color: black;
`;
const TextContent = styled.div``;
const ExtraContent = styled.div``;
const PostsWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 40px 0;
`;

const Hint = styled.div`
  position: absolute;
  top: 80%;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const HintText = styled.p`
  color: #dcf1ff;
  text-align: center;
  width: 30%;
  padding: 20px 0;
  margin: 0 auto;
`;
const HintBText = styled.b`
  color: brown;
  display: inline-block;
  padding-top: 10px;
  text-transform: uppercase;
`;

export default connect(mapStateToProps)(Home);
