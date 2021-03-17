import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }
  onclick = () => {
    const {value} =this.state;
    const {addTodo} = this.props;
    value.length > 0 ? addTodo(value) : alert('sai du lieu');
  };
  handleInput = (e) => {
    const text = e.target.value;
    this.setState({
      value: text,
    })
  };
  render() {
    const {value} =this.state;
    return (
      <div>
        <input type="text" placeholder="Nhập" value={value} onChange={this.handleInput} />
        <button onClick={this.onclick}> Nút</button>
      </div>
    );
  }
}

export default Header;
