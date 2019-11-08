import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import aviaInputsReducer from "./aviaInputsReducer";
import commentsReducer from "./commentsReducer";
import postReducer from "./postReducer";


const rootReducer = combineReducers({
	form: formReducer,
	posts: postReducer,
	comments: commentsReducer,
  aviaInputs: aviaInputsReducer
});

export default rootReducer;
