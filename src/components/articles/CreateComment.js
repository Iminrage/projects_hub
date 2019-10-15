import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addComment } from "../../reducers/actions/postActions";

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentValues: {
        post_id: this.props.post_id,
        com_id: this.props.com_id,
        author: "",
        body: ""
      }
    };
  }
  componentWillUpdate(nextProps) {
    if (this.props !== nextProps) {
      const { commentValues } = this.state;
      let current = commentValues;
      current = {
        ...current,
        com_id: nextProps.com_id,
        author: "",
        body: ""
      };
      this.setState({ commentValues: current });
    }
  }
  handleInputChange = e => {
    const { commentValues } = this.state;
    let current = commentValues;
    current = {
      ...current,
      [e.target.name]: e.target.value
    };
    this.setState({ commentValues: current });
  };
  handleSubmit = e => {
    const { commentValues } = this.state;
    e.preventDefault();
    if (commentValues.author.length && commentValues.body.length) {
      console.log(commentValues);
      this.props.addComment(commentValues);
    } else {
      console.log("Текущие значения инпутов", commentValues);
    }
  };
  render() {
    return (
      <div className="">
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="Введите имя"
            name="author"
            value={this.state.commentValues.author}
            onChange={this.handleInputChange}
          />
          <Input
            name="body"
            placeholder="Введите комментарий"
            value={this.state.commentValues.body}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSubmit}>Send</button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    com_id: state.comments.length + 1
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addComment: commentValues => {
      dispatch(addComment(commentValues));
    }
  };
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Input = styled.input`
  width: ${props => (props.name === "body" ? "350px" : "150px")};
  border: none;
  border-bottom: 1px solid grey;
  margin-right: 20px;
  padding: 10px 20px 10px 10px;
  box-sizing: border-box;
  position: relative;
  :focus {
  }
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateComment);
