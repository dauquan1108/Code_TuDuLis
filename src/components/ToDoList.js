import React, { Component } from "react";
import Item from "./Item";
import "./HeaDer.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
  }
  onChanActive = () => {
    const { onClickActive } = this.props;
  };

  render() {
    const {
      toDoListView,
      onChangeUnderlinedApp,
      onDeleteApp,
      onClickItemApp,
      checkItem
    } = this.props;
    return (
      <div>
         {/* <a onClick={() => onClickA(toDoList.length)}>Nhap</a> */}
        {toDoListView.map((item, index) => {
          return (
            <Item
              key={item.id}
              item={item}
              idToDo={item.id}
              onChangeToDoList={onChangeUnderlinedApp}
              onDeleteToDoList={onDeleteApp}
              onClickItemToDoList={onClickItemApp}
              onChange={this.onChanActive}
              checkItem= {checkItem}
            />
          );
        })}
      </div>
    );
  }
}

export default ToDoList;
