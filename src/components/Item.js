import React, { Component } from "react";
import "./HeaDer.css";
import deleteImg from "./images/delete.svg";
import penImg from "./images/pen.svg";
class Item extends Component {
  constructor(props) {
    super(props);
  }

  onClickCheckBox = () => {
    const { onClickCheckBox, item, idToDo} = this.props;
    onClickCheckBox(idToDo, item);
  };

  onDeleteItem = () => {
    const { onDeleteItem, idToDo } = this.props;
    onDeleteItem(idToDo);
  };

  onClickPen = () => {
    const { onClickPen, item } = this.props;
    onClickPen(item);
  };

  render() {
    const { item, idToDo, onClickCheckBox, onDeleteItem } = this.props;
    let nameClass = "ItemText";
    if (item.isComplete) {
      nameClass += " Item-Complete";
    }
    return (
      <div className="Item">
        <input
          className="CheckBox"
          type="checkbox"
          checked={item.isComplete}
          onClick={this.onClickCheckBox}
        />
        <p className={nameClass}>{item.title}</p>
        <img className="Pen" src={penImg} onClick={this.onClickPen} />
        <img className="Delete" src={deleteImg} onClick={this.onDeleteItem} />
        <hr className="HR" />
      </div>
    );
  }
}

export default Item;
