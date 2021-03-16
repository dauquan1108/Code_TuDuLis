import React, { Component } from "react";
import Item from "./Item";

class ToDoList extends Component {
  render() {
    const toDoList = this.props.toDoList;
    return (
      <div>
        {toDoList.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
        
      </div>
    );
  }
}

export default ToDoList;
