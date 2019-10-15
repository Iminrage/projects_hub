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
        <button onClick={this.handleClick}>Открыть/закрыть комментарии</button>
        {comment}
      </PageWrapper>
    );
  }
}

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
