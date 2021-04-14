import React, { Component } from "react";
import * as actions from "../actions/index";
import { connect } from "react-redux";
import "./HeaDer.css";
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

  handleInput = (event) => {
    this.setState({ value: event.target.value });
  };

  onClickCheckAllItem = () => {
    const { onCheckAll } = this.props;
    onCheckAll();
  };

  handleSubmit = (event) => {
    const { addToDo, handleUpdate, toDoEditing } = this.props;
    const { value } = this.state;
    if (toDoEditing && Object.keys(toDoEditing).length !== 0) {
      handleUpdate(toDoEditing, value);
    } else if (value.trim()) {
      addToDo(value);
    }
    this.cleanValue();
    event.preventDefault();
  };

  cleanValue = () => {
    this.setState({
      value: "",
    });
  };

  render() {
    let check;
    const { isCompletedAll } = this.props;
    if (isCompletedAll === false) {
      check += " image";
    } else {
      check += " image_";
    }

    return (
      <div className="Header">
        <form onSubmit={this.handleSubmit}>
          <img
            alt="Img check all"
            className={check}
            src={checkAll}
            onClick={this.onClickCheckAllItem}
          />
          <input
            type="text"
            placeholder="What needs to be done ?"
            value={this.state.value}
            onChange={this.handleInput}
            autoFocus
          />
          <input className="button" type="submit" value="Submit" />
          <hr />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDistPatchAppTodo = (dispatch, props) => {
  return {
    onAddToDoList: (todo) => {
      dispatch(actions.ADD_TODO_LIST(todo));
    },
    onCheckAll: () => {
      dispatch(actions.CHECK_ALL_ITEM());
    },
  };
};
export default connect(mapStateToProps, mapDistPatchAppTodo)(HeaDer);
