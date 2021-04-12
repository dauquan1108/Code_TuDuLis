import React, { Component } from "react";
import "./HeaDer.css";
import deleteImg from "./images/delete.svg";
import penImg from "./images/pen.svg";
// -------
import { connect } from "react-redux";
import * as actions from "../actions/index";

class Item extends Component {
  onClickCheckBox = () => {
    const { item } = this.props;
    this.props.onUpDataIsComplete(item.id, item);
  };

  deleteItem = () => {
    const { item } = this.props;
    this.props.onDeleteItem(item.id);
  };
  render() {
    const { item, onClickPen } = this.props;
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
          onChange={() => {}}
        />
        <p className={nameClass}>{item.title}</p>
        {/* Cach truyen du lieu truc tiep:  de toi dam code*/}
        <img
          alt="Img update"
          className="Pen"
          src={penImg}
          onClick={() => onClickPen(item)}
        />
        <img
          alt="Img delete"
          className="Delete"
          src={deleteImg}
          onClick={this.deleteItem}
        />
        <hr />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDistPatchAppTodo = (dispatch, props) => {
  return {
    onUpDataIsComplete: (id) => {
      dispatch(actions.UP_DATA_IS_COMPLETE_ITEM(id));
    },
    onDeleteItem: (id) => {
      dispatch(actions.DELETE_ITEM_TODO(id));
    },
  };
};
export default connect(mapStateToProps, mapDistPatchAppTodo)(Item);
