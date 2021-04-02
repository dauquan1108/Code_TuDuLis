import React, { Component } from "react";
import Item from "./Item";
import "./HeaDer.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      toDoListView,
      onClickCheckBox,
      onDeleteItem,
      onClickPen,
    } = this.props;
    return (
      <div>
        {toDoListView.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onClickCheckBox={onClickCheckBox}
              onDeleteItem={onDeleteItem}
              onClickPen={onClickPen}
            />
          );
        })}
      </div>
    );
  }
}

export default ToDoList;
