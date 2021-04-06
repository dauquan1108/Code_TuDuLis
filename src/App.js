import React, { Component } from "react";
import { v4 as uuIdv4 } from "uuid";
import "./App.css";
import "./components/HeaDer.css";
import HeaDer from "./components/HeaDer";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import ThemeContext from "./conText/Theme-Context";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      toDoListView: [],
      statusShow: "all", // statusShow = all || active || completed
      toDoEditing: {},
    };
    this.myHeader = React.createRef();
  }

  componentDidMount() {
    let toDoList = JSON.parse(localStorage.getItem("keyToDoList"));
    this.setState({
      toDoList: toDoList,
    });
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
    const Test = [{ id: uuIdv4(), title: value, isComplete: false }, ...toDoList];
    debugger;
    this.setState({
      toDoList:Test
    });
    localStorage.setItem("keyToDoList", JSON.stringify(Test));
  };

  // click vào sửa
  onClickPen = (toDoEditing) => {
    this.setState({
      toDoEditing,
    });
  };

  handleUpdate = (todoItem, textEdit) => {
    const { toDoListView } = this.state;
    toDoListView.map((item) => {
      if (item.id === todoItem.id) {
        item.title = textEdit;
      }
    });
    this.setState({
      toDoList: toDoListView,
      toDoEditing: {},
    });
    localStorage.setItem("keyToDoList", JSON.stringify(toDoListView));
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
    localStorage.setItem("keyToDoList", JSON.stringify(todoListDeleted));

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
      }
    });
    this.setState({ toDoList: copyTodoList });
  };

  // check all
  onClickCheckAllItem = () => {
    const { isCompletedAll } = this.state;
    if (isCompletedAll) {
      this.removeCompletedAll();
    } else {
      this.completedAll();
    }
  };

  completedAll = () => {
    const { toDoList } = this.state;
    toDoList.map((item) => {
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
    toDoList.map((item) => {
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
    const { toDoListView, toDoEditing, statusShow, toDoList,isCompletedAll } = this.state;
    let { theme, toggleTheme } = this.context;
    const numberToDoActive = this.getNumberToDoActive();
    return (
      <div
        style={{
          background: theme.background,
          minHeight: "100vh",
          color: theme.foreground,
        }}
      >
        <div className="ButtonChange">
          <label className="switch">
            <input type="checkbox" onClick={toggleTheme} />
            <span className="slider round" />
          </label>
        </div>
        <div className="App">
          <div className="Content">
            <HeaDer
              isCompletedAll={isCompletedAll}
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
        </div>
      </div>
    );
  }
}
App.contextType = ThemeContext;
export default App;
