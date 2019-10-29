import React from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import CreateComment from "./CreateComment";

function Commentary(props) {
  console.log(props);
  const commentaries = props.comments.length ? (
    props.comments.map(com => {
      return (
        <div className="" key={com.com_id}>
          <AuthorName>{com.author}</AuthorName>
          <ComText>{com.body}</ComText>
        </div>
      );
    })
  ) : (
    <div className="">
      <span>
        No comments yet :( <br></br> Be the first to comment!
      </span>
    </div>
  );
  return (
    <CommentarySection>
      <ExistingComments>{commentaries}</ExistingComments>
      <CreateComment post_id={props.post_id}></CreateComment>
    </CommentarySection>
  );
}

const mapStateToProps = (state, ownProps) => {
  let post_id = ownProps.post_id;
  return {
    comments: state.comments.filter(comment => comment.post_id === post_id)
  };
};

const fadeInDown = keyframes`
	from {
		transform: scale3d(1,0,1)
  }
  to {
		opacity: 1;
		transform: scale3d(1,1,1)
  }
`;

const CommentarySection = styled.div`
  opacity: 0;
  transform-origin: 100% 0;
  animation: ${fadeInDown} 0.3s both;
`;
const AuthorName = styled.span`
  display: inline-block;
  font-size: 34px;
`;
const ComText = styled.p`
  color: white;
`;
const ExistingComments = styled.div``;


export default connect(mapStateToProps)(Commentary);
