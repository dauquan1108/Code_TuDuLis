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
      checkAll: false,
      toDoList: [
        { title: "Co len nao", isComplete: false },
        { title: "Di hoc nao", isComplete: false },
      ],
      taskEditing: null,
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
  clickUnderlined = (toDoIndex) => {
    var toDoList = this.state.toDoList;
    toDoList[toDoIndex].isComplete = !toDoList[toDoIndex].isComplete; // [1] false = ![1] true
    this.setState({ toDoList });
  };
  //hinh Sua
  onDelete = (toDoIndex) => {
    let { toDoList } = this.state;
    if (toDoIndex !== -1) {
      let a = toDoList.splice(toDoIndex, 1);
      this.setState({ toDoList });
    }
  };
  //Item Click
  itemClick = (toDoIndex) => {
    let { toDoList } = this.state;
    var taskEdit = toDoList[toDoIndex];
    this.setState({
      taskEditing: taskEdit,
    });
  };
  // check all
  checkAll = (event) => {
    // debugger;
    const { toDoList } = this.state;
    const test = toDoList.map((item, index) => {
      if (item.isComplete === false) {
        item.isComplete = true;
      }
      return item;
    });
    this.setState({
      toDoList: test,
    });
    //  debugger;
  };
  // checkAllApp2 = () => {
  //   const { toDoList } = this.state;
  //   const 
  // };

  render() {
    console.log("this.state.taskEditing}", this.state.taskEditing);
    return (
      <div className="App">
        <HeaDer
          addToDo={this.addToDo}
          task={this.state.taskEditing}
          checkAllApp={this.checkAll}
        />
        <ToDoList
          toDoList={this.state.toDoList}
          onChangeUnderlinedApp={this.clickUnderlined}
          onDeleteApp={this.onDelete}
          onClickItemApp={this.itemClick}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
