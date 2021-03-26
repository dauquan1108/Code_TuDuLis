import React, { Component } from "react";
import Item from "./Item";
import "./HeaDer.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
  }
  onChanActive = () => {
    const { onClickActive } = this.props;
    console.log("Xin chao day la phai todolist");
  };

  render() {
    const {
      toDoList,
      onChangeUnderlinedApp,
      onDeleteApp,
      onClickItemApp,
      checkItem
    } = this.props;
    return (
      <div>
         {/* <a onClick={() => onClickA(toDoList.length)}>Nhap</a> */}
        {toDoList.map((item, index) => {
          return (
            <Item
              key={index}
              item={item}
              toDoIndex={index}
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
