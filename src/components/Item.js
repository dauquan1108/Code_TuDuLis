import React, { Component } from "react";
import "./HeaDer.css";
class Item extends Component {
  // Thưc thi ngay lập tức: onClick = {this.props.onclick(item)};

  // Chờ thực thi  onClick = {() => this.props.onclick(item)}

  handleClick = () => {
    const item = this.props.item;
    this.props.onclick(item); // lay ra key cua du lieu
    console.log(this);
  };

  render() {
    const item = this.props.item;
    return (
      <div onClick={this.handleClick} className="Item">
        {item.title}
      </div>
    );
  }
}

export default Item;
