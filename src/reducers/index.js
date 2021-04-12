import { combineReducers } from "redux";
import todo from "./todo";
const myReducers = combineReducers({
  todo: todo,
});
export default myReducers;
