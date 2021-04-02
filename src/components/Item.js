import React, { Component } from "react";
import "./HeaDer.css";
import deleteImg from "./images/delete.svg";
import penImg from "./images/pen.svg";
class Item extends Component {
  constructor(props) {
    super(props);
  }

  // onClickCheckBox = () => {
  //   const { onClickCheckBox, item } = this.props;
  //   onClickCheckBox(item.id, item);
  // };

  onChangeCheckBox = () => {};

  render() {
    const { item, onClickCheckBox, onDeleteItem, onClickPen } = this.props;
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
          onClick={() => onClickCheckBox (item.id, item)}
          onChange={this.onChangeCheckBox}
        />
        <p className={nameClass}>{item.title}</p>   
         {/* Cach truyen du lieu truc tiep:  de toi dam code*/}
          <img className="Pen" src={penImg} onClick={() => onClickPen(item)} />
          <img className="Delete" src={deleteImg} onClick={() => onDeleteItem(item.id) } />  
        <hr />
      </div>
    );
  }
}

export default Item;
