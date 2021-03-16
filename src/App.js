import { Component } from "react";
import "./App.css";
import Test from "./components/test";
<<<<<<< HEAD
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
=======
>>>>>>> e0c59173519200509349590051238e1101cb6bcd
class App extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      toDoList: [
        { title: "Co len nao", isComplete: false },
        { title: "Di hoc nao", isComplete: false },
        { title: "Di ngu nao", isComplete: true },
=======
      todoItem: [
        { title: "Đi chơi đi", isComplete: true },
        { title: "Ở nhà học bài", isComplete: false },
        { title: "cố lên nào", isComplete: false },
>>>>>>> e0c59173519200509349590051238e1101cb6bcd
      ],
    };
  }
  // zindex : => number
<<<<<<< HEAD
  // onItemClicked = (zindex) => {
  //   const todoItem = this.state.todoItem;
  //   debugger;
  //   // for
  //   todoItem[zindex].isComplete = !todoItem[zindex].isComplete;
  //   this.setState({ todoItem });
  // };
  render() {
    return (
      <div className="App">
        <Header />
        <ToDoList toDoList={this.state.toDoList} />
=======
  onItemClicked = (zindex) => {
    const todoItem = this.state.todoItem;
    debugger;
    // for
    todoItem[zindex].isComplete = !todoItem[zindex].isComplete;
    this.setState({ todoItem });

    // console.log({todoItem});
    // const index = todoItem.indexOf(items);
    // this.setState({
    //   todoItem: [
    //       ...todoItem.slice(0,index),
    //       {
    //         ...items,
    //         isComplete: !isComplete
    //       },
    //       ...todoItem.slice(index + 1 )
    //     ]
    // });
  };

  // hinh dung du lieu
  // <div App>
  //   <div>
  //     <div>
  //       <p>sss</p>
  //     </div>
  //   </div>
  //   <div>
  //     <div>
  //       <p>sss</p>
  //     </div>
  //   </div>
  //   <div>
  //     <div>
  //       <p>sss</p>
  //     </div>
  //   </div>
  // </div>

  render() {
    const b = this.state.todoItem; // => dinh dang: 1 array co nhieu obj
    console.log("this.state", this.state);

    // map => array
    // item === a[i] === a[0]
    // item dinh dang: => obj
    return (
      <div className="App">
        {
          // zindex 0, 1, 2
          b.length > 0 &&
            b.map((item, index) => {
              return (
                <Test zindex={index} item={item} onClick={this.onItemClicked} />
              );
            })
        }
        {/* {this.state.length === 0 && "Dữ liệu trống"} */}
>>>>>>> e0c59173519200509349590051238e1101cb6bcd
      </div>
    );
  }
}

export default App;
