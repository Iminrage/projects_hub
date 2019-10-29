import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Commentary from "./Commentary";
import ArticlesHOC from "./HOC/ArticlesHOC";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: false
    };
  }
  handleClick = e => {
    e.preventDefault();
    this.setState({ comments: !this.state.comments });
  };
  render() {
    const comment = this.state.comments && (
      <Commentary post_id={this.props.post.id} />
    );
    const post = this.props.post ? (
      <div className="">
        <PostHeading>{this.props.post.title}</PostHeading>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div className="">Loading...</div>
    );
    return (
      <PageWrapper>
        <PostWrapper>{post}</PostWrapper>
        <CommentBtn onClick={this.handleClick}>
          {this.state.comments ? "Close" : "Open"} commentary section
        </CommentBtn>
        {comment}
      </PageWrapper>
    );
  }
}

const CommentBtn = styled.button`
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  background-color: #ffffff;
  border-radius: 4px 4px 0 0;
  color: black;
  margin: 1px;
  transition: 0.3s all;
  :hover {
    box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.9);
  }
`;

const mapPropsToState = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  };
};

const PageWrapper = styled.div`
  color: white;
`;
const PostWrapper = styled.div``;
const PostHeading = styled.h3``;

export default connect(mapPropsToState)(ArticlesHOC(Article));
