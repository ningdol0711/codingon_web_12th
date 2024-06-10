import { combineReducers } from "redux";
import counterReducer from './counterReducer'
import isVisibleReducer from "./isVisibleReducer";
import bankReducer from "./moneyReducer";

// combineReducers : 여러개의 reducer를 하나로 합쳐준다.
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
  bank : bankReducer,
});

export default rootReducer;