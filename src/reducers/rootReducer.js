import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import commentsReducer from "./commentsReducer";
import postReducer from "./postReducer";


const rootReducer = combineReducers({
	form: formReducer,
	posts: postReducer,
	comments: commentsReducer,
});

export default rootReducer;
