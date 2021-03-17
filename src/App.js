import { Component } from "react";
import "./App.css";
import Test from "./components/test";
import HeaDer from "./components/HeaDer";
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
  addToDo = (value) => {
    const toDoList = this.state.toDoList;
    this.setState({
      toDoList: [{ title: value, isComplete: false }, ...this.state.toDoList],
    });
  };

  render() {
    return (
      <div className="App">
        <HeaDer addToDo={this.addToDo}/>
        <ToDoList toDoList={this.state.toDoList} />
      </div>
    );
  }
}


export default App;
