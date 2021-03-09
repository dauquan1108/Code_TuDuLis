import React, { Component } from "react";

import "./test.css";
class Test extends Component {
  render() {
    const items = this.props.items;
    let className = "TodoItem";
    if (items.isComplete) {
      className = className + " TodoItem-complete ";
    }
    // const { items } = this.props;
    // let className = 'TodoItem';
    // if (items.isComplete) {
    //   className += ' TodoItem-complete';
    // }

    return (
      <div>
        <p className={className}>{this.props.items.title}</p>
      </div>
    );
  }
}

export default Test;
