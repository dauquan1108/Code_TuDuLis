import React, { Component } from "react";
import "./HeaDer.css";
import checkAll from "./images/checkall.svg";
class HeaDer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.task ? props.task.title : "",
    };
  }

  componentDidUpdate(prevProps) {
    const { task } = this.props;
    if (prevProps.task !== task) {
      this.setValue(task.title);
    }
  }

  setValue = (title) => {
    this.setState({
      value: title,
    });
  };

  onclick = () => {
    const { value } = this.state;
    const { addToDo } = this.props;
    this.setState({
      value: "",
    });
    if (value.length > 0) {
      addToDo(value);
    } else {
      return;
    }
  };

  handleInput = (event) => {
    const text = event.target.value;
    this.setState({
      value: text,
      isComplete: false,
    });
  };

  onClickCheckAll = () => {
    const { checkAllApp } = this.props;
    checkAllApp();
  };

  render() {
    const { task, checkAllApp } = this.props;
    return (
      <div className="Header">
        <img className="image" src={checkAll} onClick={this.onClickCheckAll} />
        <input
          type="text"
          placeholder="What needs to be done?"
          value={this.state.value}
          onChange={this.handleInput}
          autoFocus
        />
        <button className="button" onClick={this.onclick}>
          {" "}
          Submit{" "}
        </button>
      </div>
    );
  }
}

export default HeaDer;
