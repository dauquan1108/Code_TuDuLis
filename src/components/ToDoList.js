import React, { Component } from "react";
import Item from "./Item";
import "./HeaDer.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { toDoList, onChangeInApp , onDeleteComponent } = this.props;
    return (
      <div>
        {toDoList.map((item, index) => {
          return (
            <Item
              item={item}
              toDoIndex={index}
              onChangeToDoList={onChangeInApp}
              onDeleteToDoList= {onDeleteComponent}
              
            />
          );
        })}
      </div>
    );
  }
}

export default ToDoList;

