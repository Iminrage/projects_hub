import comments from "../jsons/postsComments.json";

export default function commentsReducer(state = comments, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      let newComments = state.slice();
      newComments.push(action.commentValues);
      return newComments;
    default:
      return state;
  }
}
