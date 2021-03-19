import { Component } from "react";
import "./App.css";
import "./components/HeaDer.css";
import HeaDer from "./components/HeaDer";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        { title: "Co len nao", isComplete: false },
        { title: "Di hoc nao", isComplete: false },
      ],
    };
  }
  //them moi
  addToDo = (value) => {
    const toDoList = this.state.toDoList;
    this.setState({
      toDoList: [{ title: value, isComplete: false }, ...this.state.toDoList],
    });
  };
  //gach Chan
  click = (numberKey) => {
    const toDoList = this.state.toDoList;
    const item = this.state.toDoList.title;
    toDoList[numberKey].isComplete = !toDoList[numberKey].isComplete; // [1] false = ![1] true
    this.setState({ toDoList });
  };
  //hinh Sua
  onDelete = (tuDoIndex) => {
    var { toDoList } = this.state;
    if (tuDoIndex !== -1) {
      var a = toDoList.splice(tuDoIndex, 1);
      this.setState({ toDoList });
    }
  };

  render() {
    return (
      <div className="App">
        <HeaDer addToDo={this.addToDo} />
        <ToDoList
          toDoList={this.state.toDoList}
          onChangeInApp={this.click}
          onDeleteComponent={this.onDelete}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
