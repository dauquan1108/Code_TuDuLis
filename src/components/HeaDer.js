import React, { Component } from "react";

class HeaDer extends Component {
  constructor() {
    super();
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
      alert("Sai dữ liệu");
    }
    //value.length > 0 ? addToDo(value) : alert("sai du lieu");
  };
  handleInput = (event) => {
    const text = event.target.value;
    this.setState({
      value: text,
    });
  };

  render() {
    // const {value} = this.state;
    const value = this.state.value;
    return (
      <div className="Header">
        <input
          type="text"
          placeholder="Xin mời nhập"
          value={this.state.value}
          onChange={this.handleInput}
        />
        <button onClick={this.onclick}> Nút</button>
      </div>
    );
  }
}

export default HeaDer;
