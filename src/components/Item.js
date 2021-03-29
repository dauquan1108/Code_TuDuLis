import React, { Component } from "react";
import "./HeaDer.css";
import deleteImg from "./images/delete.svg";
import penImg from "./images/pen.svg";
import ToDoList from "./ToDoList";
class Item extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    const { onChangeToDoList, item} = this.props;
    onChangeToDoList(item.id, item);
  };

  onDeleteItem = () => {
    const { onDeleteToDoList, idToDo } = this.props;
    onDeleteToDoList(idToDo);
  };

  onChangeItem = () => {
    const { onClickItemToDoList, item } = this.props;
    onClickItemToDoList(item);
  };

  render() {
    const { item, onChangeToDoList, idToDo, onDeleteToDoList } = this.props;
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
          checked={item.isComplete}
        />
        <p className={nameClass}>{item.title}</p>
        <img className="Pen" src={penImg} onClick={this.onChangeItem} />
        <img className="Delete" src={deleteImg} onClick={this.onDeleteItem} />
        <hr className="HR" />
      </div>
    );
  }
}

export default Item;
