import React, { Component } from "react";
import "./HeaDer.css";
import check from "./images/check.svg";
import checkAll from "./images/checkAll.svg";
class HeaDer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  componentDidUpdate(prevProps) {
    const { toDoEditing } = this.props;
    if (toDoEditing.id !== prevProps.toDoEditing.id) {
      this.setState({
        value: toDoEditing.title,
      });
    }
  }

  onclickSubMit = () => {
    const { value } = this.state;
    const { handleUpdate, toDoEditing, addToDo } = this.props;
    if (toDoEditing && Object.keys(toDoEditing).length !== 0) {
      handleUpdate(toDoEditing, value);
    } else if (value.trim()) {
      addToDo(value);
    }
    this.setState({
      value: "",
    });
  };
  cleanValue = () => {
    this.setState({
      value: "",
    });
  };

  onKeyDownAddToDo = (event) => {
    const { addToDo, handleUpdate, toDoEditing } = this.props;
    let { value } = event.target;
    if (event.keyCode === 13) {
      if (toDoEditing && Object.keys(toDoEditing).length !== 0) {
        handleUpdate(toDoEditing, value);
      } else if (value.trim()) {
        addToDo(value);
      }
      this.setState({
        value: "",
      });
    }
  };

  handleInput = (event) => {
    let text = event.target.value;
    this.setState({
      value: text,
    });
  };

  render() {
    const {
      toDoEditing,
      onClickCheckAllItem,
      handleUpdate,
      addToDo,
      item,
    } = this.props;
    return (
      <div className="Header">
        <img className="image" src={checkAll} onClick={onClickCheckAllItem} />
        <input
          type="text"
          placeholder="What needs to be done ?"
          value={this.state.value}
          onChange={this.handleInput}
          autoFocus
          onKeyDown={this.onKeyDownAddToDo}
        />
        <button className="button" onClick={this.onclickSubMit}>
          Submit
        </button>
        <hr />
      </div>
    );
  }
}

export default HeaDer;
