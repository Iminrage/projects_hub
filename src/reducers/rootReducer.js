import posts from "../jsons/posts.json";
import comments from "../jsons/postsComments.json";

const initState = {
  posts: posts,
  comments: comments
};

const rootReducer = (state = initState, action) => {
  if (action.type === "ADD_COMMENT") {
    let newComments = state.comments;
    newComments.push(action.commentValues);
    return {
      ...state,
      comments: newComments
    };
  }
  return state;
};

export default rootReducer;
