import React, { Component } from "react";

class Item extends Component {
  render() {
    const item = this.props.item;
    console.log = (item);
    return <div>{item.title}</div>;
  }
}

export default Item;
