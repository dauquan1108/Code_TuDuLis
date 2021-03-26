import { Component } from "react";
import "./App.css";
import "./components/HeaDer.css";
import HeaDer from "./components/HeaDer";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
// import Cong from "./tuan6/Cong";
var all = true;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAll: false,
      toDoList: [
        { title: "Co len nao", isComplete: false },
        { title: "Di hoc nao", isComplete: true },
        { title: "Di ngu", isComplete: false },
      ],
      taskEditing: null,
      indexEditing: null,
      number: 0,
      toDoToShow: "all",
    };
  }

  componentDidMount() {
    const { toDoList } = this.state;
    this.setState({
      number: toDoList.filter((num) => !num.isComplete).length,
    });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   debugger;
  //   if (prevState.toDoList.length !== this.state.toDoList.length) {
  //     this.setState({
  //       number: this.state.toDoList.length,
  //     });
  //   }
  // }

  //them moi
  addToDo = (value, toDoIndex) => {
    debugger;
    const { toDoList } = this.state;
    this.setState({
      toDoList: [
        { id: toDoList.length + 1, title: value, isComplete: false },
        ...this.state.toDoList,
      ],
      number: toDoList.filter((num) => !num.isComplete).length + 1,
    });
  };

  //gach Chan
  clickUnderlined = (toDoIndex) => {
    let { toDoList } = this.state;
    toDoList[toDoIndex].isComplete = !toDoList[toDoIndex].isComplete; // [1] false = ![1] true
    this.setState({ toDoList });
  };
  //hinh Sua
  onDelete = (toDoIndex) => {
    let { toDoList } = this.state;
    if (toDoIndex !== -1) {
      let a = toDoList.splice(toDoIndex, 1);
      this.setState({
        toDoList,
        number: toDoList.filter((num) => !num.isComplete).length,
      });
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
    const { toDoList } = this.state;
    if (all === true) {
      this.checkAll1();
      all = false;
    } else {
      this.checkAll2();
      all = true;
    }
    this.setState({
      number: toDoList.filter((num) => !num.isComplete).length,
    });
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
    debugger;
    const { toDoList, taskEditing, indexEditing } = this.state;
    taskEditing.title = title;
    toDoList.splice(indexEditing, 1, taskEditing);
    this.setState({
      toDoList: [...toDoList],
      taskEditing: null,
      indexEditing: null,
    });
  };

  checkItem = () => {
    const { toDoList } = this.state;
    const itemLeft = toDoList.filter((num) => !num.isComplete).length;
    this.setState({
      number: itemLeft,
    });
  };

  render() {
    const {
      taskEditing,
      indexEditing,
      number,
      toDoList,
      toDoIndex,
    } = this.state;
    // let toDoList=[];
    // if (this.state.toDoToShow === "all") {
    //   const { toDoList } = this.state;
    // } else if (this.state.toDoToShow === "Active") {
    //   toDoList = this.state.ToDoList.filter((num) => !num.isComplete);
    // } else if (this.state.toDoToShow === "completed") {
    //   toDoList = this.state.ToDoList.filter((num) => num.isComplete);
    // }

    return (
      <div className="App">
        <HeaDer
          addToDo={this.addToDo}
          task={taskEditing}
          indexEditing={indexEditing}
          checkAllApp={this.checkAll}
          handleUpdate={this.handleUpdate}
        />
        <ToDoList
          number={number}
          toDoList={toDoList}
          onChangeUnderlinedApp={this.clickUnderlined}
          onDeleteApp={this.onDelete}
          onClickItemApp={this.itemClick}
          onClickActive={this.props.onClickActive}
          checkItem={this.checkItem}
          onClickA={this.onClickA}
        />

        <Footer onClickActive={this.onClickActive} number={number} />
        {/* <Cong/> */}
      </div>
    );
  }
}

export default App;
