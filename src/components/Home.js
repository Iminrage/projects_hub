import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  padding: 0 70px;
  margin: 40px 0;
`;

function Home(props) {
  console.log(props);
  const { posts } = props;
  const postsList = props.posts.length ? (
    posts.map(post => {
      return (
        <PostLinkWrapper key={post.id}>
          <NewLink to={"/" + post.id}>
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
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
