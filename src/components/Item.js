import React, { Component } from "react";
import "./HeaDer.css";
import deleteImg from "./images/delete.svg";

class Item extends Component {
  constructor(props) {
    super(props);
  }
  // Thưc thi ngay lập tức: onClick = {this.props.onclick(item)};

  // Chờ thực thi  onClick = {() => this.props.onclick(item)}

  // onclick = () => {
  //   const item = this.props.item;
  //   this.props.onclick(item); // lay ra key cua du lieu
  // };

  handleClick = () => {
    const { onChangeToDoList, tuDoIndex } = this.props;
    onChangeToDoList(tuDoIndex);
  };

  onDeleteItem = () => {
    const { onDeleteToDoList, toDoIndex } = this.props;
    onDeleteToDoList(toDoIndex);
  };
  render() {
    const { item, onChangeToDoList, toDoIndex, onDeleteToDoList } = this.props;
    let nameClass = "ItemText";
    if (item.isComplete) {
      nameClass += " Item-Complete";
    }
    return (
      <div className="Item">
        <input
          className="CheckBox"
          type="checkbox"
          onClick={this.handleClick}
          defaultChecked={item.isComplete}
        />
        <p className={nameClass}>{item.title}</p>
        <img className="Delete" src={deleteImg} onClick={this.onDeleteItem} />
        <hr />
      </div>
    );
  }
}

export default Item;
