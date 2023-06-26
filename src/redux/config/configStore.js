import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";
import review from "../modules/review";
// store를 만들어 내기
// 중앙데이터관리소
const rootReducer = combineReducers({
  todos: todos,
  review: review,
});

const store = createStore(rootReducer);

export default store;
