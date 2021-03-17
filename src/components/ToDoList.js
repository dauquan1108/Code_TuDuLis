import React, { Component } from "react";
import Item from "./Item";

class ToDoList extends Component {
  clickItem = (itemChildren) => {
      console.log(itemChildren);
  };

  /**
  
  <div> 
     <div classname = "item" >co len nao  </div> toDoList[0]
     <div classname = "item" >co len nao 1 </div>  toDoList[1]
     <div classname = "item" >co len nao 2 </div>  toDoList[2]
  </div>

   
   * 
  */

  render() {
    const toDoList = this.props.toDoList;
    return (
      <div>
        {toDoList.map((item, index) => {
          return <Item key={index} item={item} onclick={this.clickItem} />;
        })}
      </div>
    );
  }
}

export default ToDoList;
