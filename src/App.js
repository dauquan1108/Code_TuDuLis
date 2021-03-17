import { Component } from "react";
import "./App.css";
import Test from "./components/test";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoList: [
        { title: "Co len nao", isComplete: false },
        { title: "Di hoc nao", isComplete: false },
        { title: "Di ngu nao", isComplete: true },
      ],
    };
  }
  // zindex : => number
  // onItemClicked = (zindex) => {
  //   const todoItem = this.state.todoItem;
  //   debugger;
  //   // for
  //   todoItem[zindex].isComplete = !todoItem[zindex].isComplete;
  //   this.setState({ todoItem });
  // };
  addTodo = (value) => {
    const {toDoList} = this.state;
    this.setState({
      toDoList: [
        { title: value, isComplete: false },
        ...toDoList,
      ] 
    })
  }
  render() {
    return (
      <div className="App">
        <Header addTodo={this.addTodo} />
        <ToDoList toDoList={this.state.toDoList} />
      </div>
    );
  }
}

export default App;
