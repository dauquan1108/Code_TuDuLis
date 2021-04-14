import React, { Component } from "react";
import "./HeaDer.css";
import deleteImg from "./images/delete.svg";
import penImg from "./images/pen.svg";
import Button from "./Button";
class Item extends Component {
  onChangeCheckBox = () => {};

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
          onClick={() => onClickCheckBox(item.id, item)}
          onChange={this.onChangeCheckBox}
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
