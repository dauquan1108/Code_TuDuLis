import React, { Component } from "react";
import "./HeaDer.css";
import checkAll from "./images/checkall.svg";
class HeaDer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      idEdit: null,
    };
  }

  componentDidUpdate(prevProps) {
    const {idToDoEditing, toDoEditing }= this.props;
    if (
      idToDoEditing !== prevProps.idToDoEditing && toDoEditing
    ) {
      this.setState({
        value: toDoEditing.title,
      });
    }
  }

  onclickSubMit = () => {
    const { value } = this.state;
    debugger;
    const { handleUpdate, toDoEditing, addToDo } = this.props;
    if (Object.keys(toDoEditing).length !== 0 && typeof toDoEditing === 'object') {
      handleUpdate(value);
    } else if (value.length > 0) {
      addToDo(value);
    }
    this.setState({
      value: "",
    });
  };

  onKeyDownAddToDo = (event) => {
    // const { addToDo } = this.props;
    // let value = event.target.value;
    // if (event.keyCode === 13) {
    //   if (!value.trim()) return;
    //   else {
    //     addToDo(value);
    //   }
    //   this.setState({
    //     value: "",
    //   });
    // }
  };

  handleInput = (event) => {
    const text = event.target.value;
    this.setState({
      value: text,
      isComplete: false,
    });
  };

  onClickCheckAllItem = () => {
    const { onClickCheckAllItem } = this.props;
    onClickCheckAllItem();
  };

  render() {
    const {
      idToDoEditing,
      toDoEditing,
      onClickCheckAllItem,
      handleUpdate,
      addToDo
    } = this.props;
    return (
      <div className="Header">
        <img
          className="image"
          src={checkAll}
          onClick={this.onClickCheckAllItem}
        />
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
        <hr/>
      </div>
    );
  }
}

export default HeaDer;
