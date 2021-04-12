import * as types from "../constants/ActionTypes";

export const TODO_LIST_VIEW_ALL = () => {
  return {
    type: types.TODO_LIST_VIEW,
  };
};

export const ADD_TODO_LIST = (todo) => {
  return {
    type: types.ADD_TODO,
    todo: todo,
  };
};

export const DELETE_ITEM_TODO = (id) => {
  return {
    type: types.DELETE_ITEM,
    id,
  };
};

export const UP_DATA_IS_COMPLETE_ITEM = (id) => {
  return {
    type: types.UP_DATA_IS_COMPLETE,
    id: id,
  };
};
