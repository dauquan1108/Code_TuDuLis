import React, { Component } from "react";
import "./HeaDer.css";
import checkAll from "./images/checkall.svg";
class HeaDer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  onclick = () => {
    const value = this.state.value;
    const addToDo = this.props.addToDo;
    this.setState({
      value: "",
    });
    // const {addTodo} = this.props; cach 2
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
    });
  };


  handleOnKeyUp = () => {
    // const value = this.state.value;
    // const addToDo = this.props.addToDo;
    // this.setState({
    //   value: "",
    // });
    // // const {addTodo} = this.props; cach 2
    // if (value.length > 0) {
    //   addToDo(value);
    // } else {
    //   return;
    // }
  };

  render() {
    return (
      <div className="Header">
        <img className="image" src={checkAll} />
        <input
          type="text"
          placeholder="What needs to be done?"
          value={this.state.value}
          onChange={this.handleInput}
          
          onKeyDown={this.handleOnKeyUp}
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
