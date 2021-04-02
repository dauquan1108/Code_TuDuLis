import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import "./components/HeaDer.css";
import HeaDer from "./components/HeaDer";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
// import Class from "./tuan6/Class";
// import Ref from "./tuan6/Ref";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        // { id: 1, title: "a1", isComplete: false },
        // { id: 2, title: "a2", isComplete: true },
        // { id: 3, title: "a3", isComplete: false },
      ],
      toDoListView: [],
      statusShow: "all", // statusShow = all || active || completed
      toDoEditing: {},
    };
    this.myHeader = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    // TODO: Tính toán lại thằng toDoListView dựa trên thằng toDoList, statusShow
    const { toDoList, statusShow } = state;
    let toDoListView = toDoList;
    let toDoListCompleted = toDoList.filter((num) => num.isComplete);
    switch (statusShow) {
      case "active": {
        toDoListView = toDoList.filter((num) => !num.isComplete);
        break;
      }
      case "completed": {
        toDoListView = toDoListCompleted;
        break;
      }
      default: {
        break;
      }
    }
    return {
      toDoListView,
      isCompletedAll: toDoListCompleted.length === toDoList.length,
    };
  }

  //thêm mới
  addToDo = (value) => {
    const { toDoList } = this.state;
    this.setState({
      toDoList: [
        { id: uuidv4(), title: value, isComplete: false },
        ...toDoList,
      ],
    });
  };

  // click vào sửa
  onClickPen = (toDoEditing) => {
    this.setState({
      toDoEditing,
    });
  };

  handleUpdate = (todoItem, textEdit) => {
    const { toDoListView, toDoList } = this.state;
    toDoListView.map((item) => {
      if (item.id === todoItem.id) {
        item.title = textEdit;
      }
    });
    this.setState({
      toDoList: toDoListView,
      toDoEditing: {},
    });
  };

  // Xóa
  onDeleteItem = (id) => {
    const { toDoList } = this.state;
    const copyTodoList = [...toDoList];
    // loc ra nhung phan tu khong bang id
    const todoListDeleted = copyTodoList.filter((todo) => todo.id !== id);
    this.setState({
      toDoList: todoListDeleted,
    });
    this.myHeader.current.cleanValue();
  };

  // gạch chân item
  onClickCheckBox = (id) => {
    const { toDoList } = this.state;
    let copyTodoList = [...toDoList];
    // so sanh id ban dau voi id duoc truyen tu thang con gui toi neu 2 id bang nhau thi moi thuc hien khoi lenhj
    copyTodoList.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        return;
      }
    });
    this.setState({ toDoList: copyTodoList });
  };

  // check all
  onClickCheckAllItem = () => {
    const { toDoList, isCompletedAll } = this.state;
    if (isCompletedAll) {
      this.removeCompletedAll();
    } else {
      this.completedAll();
    }
  };

  completedAll = () => {
    const { toDoList } = this.state;
    toDoList.map((item, index) => {
      if (item.isComplete === false) {
        item.isComplete = true;
      }
    });
    this.setState({
      toDoList,
    });
  };

  removeCompletedAll = () => {
    const { toDoList } = this.state;
    toDoList.map((item, index) => {
      if (item.isComplete === true) {
        item.isComplete = false;
      }
    });
    this.setState({
      toDoList,
    });
  };

  updateStatusShow = (statusShow) => {
    this.setState({
      statusShow,
    });
  };

  getNumberToDoActive = () => {
    const { toDoList } = this.state;
    const toDoListActive = toDoList.filter((num) => !num.isComplete);
    return toDoListActive.length;
  };

  removeAllToDoListCompleted = () => {
    const { toDoList } = this.state;
    this.setState({
      toDoList: toDoList.filter((num) => !num.isComplete),
    });
  };

  render() {
    const { toDoListView, toDoEditing, statusShow, toDoList } = this.state;

    const numberToDoActive = this.getNumberToDoActive();

    return (
      <>
        <div className="App">
          <HeaDer
            toDoEditing={toDoEditing}
            addToDo={this.addToDo}
            onClickCheckAllItem={this.onClickCheckAllItem}
            handleUpdate={this.handleUpdate}
            ref={this.myHeader}
          />
          <ToDoList
            toDoListView={toDoListView}
            onClickCheckBox={this.onClickCheckBox}
            onClickPen={this.onClickPen}
            onDeleteItem={this.onDeleteItem}
          />
          {toDoList.length > 0 && (
            <Footer
              toDoList={toDoList}
              numberToDoActive={numberToDoActive}
              updateStatusShow={this.updateStatusShow}
              statusShow={statusShow}
              removeAllToDoListCompleted={this.removeAllToDoListCompleted}
            />
          )}
        </div>
        {/* <div>
          <Ref />
        </div> */}
      </>
    );
  }
}

export default App;
