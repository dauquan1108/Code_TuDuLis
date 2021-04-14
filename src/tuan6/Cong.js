import React, { Component } from "react";

class Cong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  clickCong = () => {
    //debugger;
    this.setState({
      number: this.state.number + 1,
    });
  };
  clickTru = () => {
    //debugger;
    this.setState({
      number: this.state.number - 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={() => this.clickCong()}>+</button>
        <strong>{this.state.number}</strong>
        <button onClick={() => this.clickTru()}>-</button>
      </div>
    );
  }
}
export default Cong;
