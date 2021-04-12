import * as type from "../constants/ActionTypes";
import { v4 as uuIdv4 } from "uuid";

let data = JSON.parse(localStorage.getItem("keyToDoList"));

let idIndex = (tasks, id) => {
  let notfound = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      notfound = index;
    }
  });
  return notfound;
};

let initialToDoList = data ? data : [];
//let  statusShow = "all"; // statusShow = all || active || completed


let myReducers = (state = initialToDoList, action) => {
  switch (action.type) {
    case type.TODO_LIST_VIEW:
      return state;

    case type.ADD_TODO:
      let ToDoNew = {
        id: uuIdv4(),
        title: action.todo.value,
        isComplete: false,
      };
      state.push();
      localStorage.setItem("keyToDoList", JSON.stringify(state));
      return [...state];

    case type.DELETE_ITEM:
      let ID = action.id;
      let index = idIndex(state, ID);
      state.splice(index, 1);

      localStorage.setItem("keyToDoList", JSON.stringify(state));
      return [...state];

    case type.CHECK_ALL:
      console.log("---action---", action);
      return [...state];

    case type.UP_DATA_IS_COMPLETE:
      let id = action.id;
      let indexID = idIndex(state, id);
      let isCompleteCheck = { ...state[indexID] };
      isCompleteCheck.isComplete = !isCompleteCheck.isComplete;
      state[indexID] = isCompleteCheck;
      localStorage.setItem("keyToDoList", JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
};

export default myReducers;
