import { Component } from "react";
import "./App.css";
import "./components/HeaDer.css";
import HeaDer from "./components/HeaDer";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import Cong from "./tuan6/Cong";
var all = true;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAll: false,
      toDoList: [
        { id: 1, title: "Co len nao", isComplete: false },
        { id: 2, title: "Di hoc nao", isComplete: true },
      ],
      taskEditing: null,
      indexEditing: null,
      number: 0,
    };
  }
  componentDidMount() {
    this.setState({
      number: this.state.toDoList.length
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.toDoList.length !== this.state.toDoList.length) {
      this.setState({
        number: this.state.toDoList.length
      })
    }
  }

  //them moi
  addToDo = (value, toDoIndex) => {
    const { toDoList } = this.state;
      this.setState({
        toDoList: [{ id: toDoList.length+1, title: value, isComplete: false }, ...this.state.toDoList],
      });
  };

  //gach Chan
  clickUnderlined = (toDoIndex) => {
    var { toDoList } = this.state;
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
  itemClick = (toDoIndex, item) => {
    this.setState({
      taskEditing: item,
      indexEditing: toDoIndex,
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

  onClickA = (value) => {
    this.setState((_state) => ({
      number: value,
    }));
  };
  handleUpdate = (title) => {
    const {toDoList, taskEditing, indexEditing} = this.state;
    taskEditing.title = title;
    toDoList.splice(indexEditing, 1, taskEditing)
    this.setState({
      toDoList: [...toDoList],
      taskEditing: null,
      indexEditing: null,
    })
  }

  render() {
    return (
      <div className="App">
        <HeaDer
          addToDo={this.addToDo}
          task={this.state.taskEditing}
          checkAllApp={this.checkAll}
          handleUpdate={this.handleUpdate}
          indexEditing={this.state.indexEditing}
        />
        <ToDoList
          toDoList={this.state.toDoList}
          onChangeUnderlinedApp={this.clickUnderlined}
          onDeleteApp={this.onDelete}
          onClickItemApp={this.itemClick}
          onClickActive={this.props.onClickActive}
          onClickA={this.onClickA}
        />

        <Footer onClickActive={this.onClickActive} number={this.state.number} />
        {/* <Cong/> */}
      </div>
    );
  }
}

export default App;
