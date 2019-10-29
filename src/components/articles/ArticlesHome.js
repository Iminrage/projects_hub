import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArticlesHOC from "./HOC/ArticlesHOC";

const Home = props => {
  console.log(props);
  const { posts } = props;
  const postsList = props.posts.length ? (
    posts.map(post => {
      return (
        <PostLinkWrapper key={post.id}>
          <NewLink to={"/projects_hub/articles/" + post.id}>
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
  return <PostsWrapper>{postsList}</PostsWrapper>;
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const PostsWrapper = styled.div``;
const PostLinkWrapper = styled.div`
  margin-bottom: 30px;
`;
const NewLink = styled(Link)`
  display: flex;
  text-decoration: none;
  border-bottom: 1px solid white;
  transition: 0.3s all;
  border-radius: 7px 7px 0 0;
  :hover {
    background-color: rgba(180, 226, 255, 0.1);
  }
`;
const PostHeading = styled.h2`
  padding: 5px 100px 10px 150px;
  color: white;
	@media (max-width: 1000px) {
		padding: 5px 50px 15px 100px;
  }
	@media (max-width: 700px) {
		text-align: center;
		padding: 5px 0 0 10px;
  }
`;
const PostText = styled.p`
  padding: 0 100px 20px 100px;
  color: white;
	@media (max-width: 1000px) {
		padding: 0 50px 15px 50px;
  }
	@media (max-width: 700px) {
		padding: 0 10px 5px 10px;
  }
	@media (max-width: 500px) {
		padding: 0 5px 5px 5px;
  }
`;
const TextContent = styled.div``;
const ExtraContent = styled.div``;

export default connect(mapStateToProps)(ArticlesHOC(Home));
