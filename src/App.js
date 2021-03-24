import { Component } from "react";
import "./App.css";
import "./components/HeaDer.css";
import HeaDer from "./components/HeaDer";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
var all = true;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAll: false,
      toDoList: [
        { title: "Co len nao", isComplete: false },
        { title: "Di hoc nao", isComplete: true },
      ],
      taskEditing: null,
      number: 0,
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
  checkAll = () => {
    if (all === true) {
      this.checkAll1();
      all = false;
    } else {
      this.checkAll2();
      all = true;
    }
  };
  checkAll1 = () => {
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
  };
  checkAll2 = () => {
    const { toDoList } = this.state;
    const test = toDoList.map((item, index) => {
      if (item.isComplete === true) {
        item.isComplete = false;
      }
      return item;
    });
    this.setState({
      toDoList: test,
    });
  };

  onClickA =(value)=>{
    this.setState(_state => ({
      number: value
    }));
  }

  render() {
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
          onClickActive={this.props.onClickActive}
          onClickA = {this.onClickA}
        />
       
        <Footer onClickActive={this.onClickActive} number={this.state.number} />
      </div>
    );
  }
}

export default App;
