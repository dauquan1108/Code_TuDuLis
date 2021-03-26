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

  // cach 1:
  //   static getDerivedStateFromProps(nextProps, prevState){
  //     const {indexEditing, task} = nextProps;
  //     if(indexEditing !== null && prevState.idEdit === null){
  //       return {
  //         value: task.title,
  //         idEdit: indexEditing,
  //       };
  //    } else if( task && task.title !== prevState.value && prevState.idEdit !== indexEditing) {
  //     return {
  //       value: task.title,
  //       idEdit: indexEditing,
  //     };
  //    }
  //    else return null;
  //  }
  // cach 2:
  componentDidUpdate(prevProps) {
    // debugger;
    if (this.props.indexEditing !== prevProps.indexEditing && this.props.task) {
      this.setState({
        value: this.props.task.title,
      });
    }
  }
  setValue = (title) => {
    this.setState({
      value: title,
    });
  };

  onclick = () => {
    const { value } = this.state;
    const { handleUpdate, task, addToDo } = this.props;
    if (task) {
      handleUpdate(value);
    } else if (value.length > 0) {
      addToDo(value);
    }
    this.setState({
      value: "",
      idEdit: null,
    });
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
    const { task, checkAllApp, indexEditing, handleUpdate } = this.props;
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
          Submit
        </button>
      </div>
    );
  }
}

export default HeaDer;
