import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import "./components/HeaDer.css";
import HeaDer from "./components/HeaDer";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
// import Cong from "./tuan6/Cong";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        // { id: 1, title: "a1", isComplete: false },
        // { id: 2,title: "a2", isComplete: true },
        // { id: 3,title: "a3", isComplete: false },
      ],

      toDoListView: [],
      statusShow: "all", // statusShow = all || active || completed


      idToDoEditing : null,
      toDoEditing: {},
      indexTodoEditing: 0,

      isCompletedAll: false,
    };
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

  //them moi
  addToDo = (value) => {
    const { toDoList } = this.state;
    this.setState({
      toDoList: [
        { id: uuidv4(), title: value, isComplete: false },
        ...this.state.toDoList,
      ],
    });
  };

  //hinh Sua
  onDelete = (id) => {
    const { toDoList } = this.state;

    const copyTodoList = [...toDoList];
    // loc ra nhung phan tu khong bang id
    const todoListDeleted = copyTodoList.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      toDoList: todoListDeleted,
    });
  };

  handleUpdate = (title) => {
    const { toDoList, toDoEditing } = this.state;
    debugger;
    console.log('toDoList', toDoList);
    toDoEditing.title = title;
    let indexEdit
    toDoList.map((item, index) => {
      if(item.id === toDoEditing.id) {
        indexEdit = index
      }
    });
    const newToDoList = [...toDoList];
    newToDoList.splice(indexEdit, 1, toDoEditing);

    indexEdit && this.setState({
      toDoList: [...newToDoList],
      toDoEditing: null,
      indexTodoEditing: null,
    });
  };

  //gach Chan
  clickUnderlined = (id) => {
    const { toDoList } = this.state;
    let copyTodoList = [...toDoList];
    // so sanh id ban dau voi id duoc truyen tu thang con gui toi neu 2 id bang nhau thi moi thuc hien khoi lenhj
    copyTodoList.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        return;
      }
    });

    //toDoList[id].isComplete = !toDoList[id].isComplete; // [1] false = ![1] true
    /**
     * clickUnderlined(indexTodo); => indexTodo = 0;
     * todoList = [
     *      {id: 1, title: 'Di an com', isComplete: true}
     *      {id: 2, title: 'Di choi', isComplete: false}
     *      {id: 3, title: 'Coding', isComplete: false}
     *      {id: 4, title: 'Java', isComplete: false}
     *      {id: 5, title: 'Javascript', isComplete: false}
     *      {id: 6, title: 'PHP', isComplete: false}
     *      {id: 7, title: 'HTML', isComplete: false}
     *     ]
     * toDoList[toDoIndex].isComplete = !toDoList[toDoIndex].isComplete; // [1] false = ![1] true
     * 
     * => A[0].isComplate = !A[0].isComplate;
     */
    this.setState({ toDoList: copyTodoList });
    // this.setState({ toDoList });
  };

  //Item Click
  itemClick = (item) => {
    console.log('id', item.id);
    console.log('item', item);
    this.setState({
      idToDoEditing: item.id,
      toDoEditing: item,
      //indexTodoEditing: toDoIndex,
    });
  };

  // check all
  checkAll = () => {
    const { toDoList, isCompletedAll } = this.state;
    if (isCompletedAll) {
      this.removeCompletedAll();
    } else {
      this.completedAll();
    }
  };

  completedAll = () => {
    const { toDoList } = this.state;
    debugger;
    const test = toDoList.map((item, index) => {
      if (item.isComplete === false) {
        item.isComplete = true;
      }
      return item;
    });
    debugger;
    this.setState({
      toDoList: test,
    });
  };

  removeCompletedAll = () => {
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
    const {
      toDoListView,
      idToDoEditing,
      toDoEditing,
      indexTodoEditing,
      statusShow,
      toDoList,
      isCompletedAll,
    } = this.state;
    console.log(toDoList);
    const numberToDoActive = this.getNumberToDoActive();

    return (
      <div className="App">
        <HeaDer
          isCompletedAl={isCompletedAll}
          idToDoEditing={idToDoEditing}
          toDoEditing={toDoEditing}

          indexTodoEditing={indexTodoEditing}
          addToDo={this.addToDo}
          checkAllApp={this.checkAll}
          handleUpdate={this.handleUpdate}
        />
        <ToDoList
          toDoListView={toDoListView}
          onChangeUnderlinedApp={this.clickUnderlined}
          onDeleteApp={this.onDelete}
          onClickItemApp={this.itemClick}
          onClickActive={this.props.onClickActive}
          checkItem={this.checkItem}
          onClickA={this.onClickA}
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
    );
  }
}

export default App;
