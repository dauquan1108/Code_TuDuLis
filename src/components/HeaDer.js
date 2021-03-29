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
  //     const {indexTodoEditing, task} = nextProps;
  //     if(indexTodoEditing !== null && prevState.idEdit === null){
  //       return {
  //         value: task.title,
  //         idEdit: indexTodoEditing,
  //       };
  //    } else if( task && task.title !== prevState.value && prevState.idEdit !== indexTodoEditing) {
  //     return {
  //       value: task.title,
  //       idEdit: indexTodoEditing,
  //     };
  //    }
  //    else return null;
  //  }
  // cach 2:
  componentDidUpdate(prevProps) {
    debugger;
    if (
      this.props.idToDoEditing !== prevProps.idToDoEditing &&
      this.props.toDoEditing
    ) {
      this.setState({
        value: this.props.toDoEditing.title,
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
    debugger;
    const { handleUpdate, toDoEditing, addToDo } = this.props;
    if (Object.keys(toDoEditing).length !== 0 && typeof toDoEditing === 'object') {
      handleUpdate(value);
    } else if (value.length > 0) {
      addToDo(value);
    }
    this.setState({
      value: "",
      idEdit: null,
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

  onClickCheckAll = () => {
    const { checkAllApp } = this.props;
    checkAllApp();
  };

  render() {
    const {
      idToDoEditing,
      toDoEditing,
      checkAllApp,
      indexTodoEditing,
      handleUpdate,
      isCompletedAll,
    } = this.props;
    return (
      <div className="Header">
        <img
          style={{ opacity: isCompletedAll ? 1 : 0.5 }}
          className="image"
          src={checkAll}
          onClick={this.onClickCheckAll}
        />
        <input
          type="text"
          placeholder="What needs to be done?"
          value={this.state.value}
          onChange={this.handleInput}
          autoFocus
          onKeyDown={this.onKeyDownAddToDo}
        />
        <button className="button" onClick={this.onclick}>
          Submit
        </button>
        <hr/>
      </div>
    );
  }
}

export default HeaDer;
