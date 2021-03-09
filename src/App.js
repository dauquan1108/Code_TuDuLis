import { Component } from "react";
import "./App.css";
import Test from "./components/test";
class App extends Component {
  constructor() {
    super();
    this.todoitem = [
      {title:"Đi chơi đi", isComplete: true },
      {title:"Ở nhà học bài"},
      {title:"cố lên nào"}
    ];
  }
  render() {
    return (
      <div className="App">
        {this.todoitem.length > 0 &&
          this.todoitem.map((items, index) => (
            <Test key={index} items={items} />
          ))}
        {this.todoitem.length === 0 && "Dữ liệu trống"}
      </div>
    );
  }
}

export default App;
