import React, { Component } from "react";
import "./HeaDer.css";
import deleteImg from "./images/delete.svg";
import penImg from "./images/pen.svg";
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
    const { onChangeToDoList, toDoIndex } = this.props;
    onChangeToDoList(toDoIndex);
  };

  onDeleteItem = () => {
    const { onDeleteToDoList, toDoIndex } = this.props;
    onDeleteToDoList(toDoIndex);
  };

  onChangeItem = () => {
    const { onClickItemToDoList, toDoIndex, item } = this.props;
    //console.log(this.props.toDoIndex);
    onClickItemToDoList(toDoIndex, item);
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
          checked={item.isComplete}
        />
        <p className={nameClass}>{item.title}</p>
        <img className="Pen" src={penImg} onClick={this.onChangeItem} />
        <img className="Delete" src={deleteImg} onClick={this.onDeleteItem} />
        <hr />
      </div>
    );
  }
}

export default Item;
