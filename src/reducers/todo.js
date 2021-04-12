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
      state.push(ToDoNew);
      localStorage.setItem("keyToDoList", JSON.stringify(state));
      return [...state];

    case type.DELETE_ITEM:
      console.log(action);
      // const todoListCopy = [...initialToDoList];
      // let ID = action.id;
      // console.log("xoa id", ID);
      // debugger;
      // todoListCopy.splice(ID, 1);

      // // const todoListDeleted = initialToDoList.filter((todo) => todo.id !== ID);
      // localStorage.setItem("keyToDoList", JSON.stringify(initialToDoList));

      return [...state];

    case type.UP_DATA_IS_COMPLETE:
      console.log(action);
      // let id = action.id;
      // initialToDoList.map((todo) => {
      //   if (todo.id === id) {
      //     todo.isComplete = !todo.isComplete;
      //   }
      // });
      // localStorage.setItem("keyToDoList", JSON.stringify(initialToDoList));

      return [...state];

    default:
      return state;
  }
};

export default myReducers;
