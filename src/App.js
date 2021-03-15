import { Component } from "react";
import "./App.css";
import Test from "./components/test";

<<<<<<< HEAD
=======
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
>>>>>>> 14914df4a0c49c6a2ba19ccf411766f32fc9f566
class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItem : [
        { title: "Đi chơi đi", isComplete: true },
        { title: "Ở nhà học bài" , isComplete: false},
        { title: "cố lên nào", isComplete: false },
      ]
    } 
  }

  // zindex : => number
  onItemClicked = (zindex) => {
      const todoItem = this.state.todoItem;
      debugger;
      // for
      todoItem[zindex].isComplete = !todoItem[zindex].isComplete;
      this.setState({todoItem});

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
    console.log ("this.state", this.state);

    // map => array
    // item === a[i] === a[0]
    // item dinh dang: => obj
    return (
      <div className="App">
<<<<<<< HEAD
        {
          // zindex 0, 1, 2
          b.length > 0 && b.map((item, index) => {
            return (
              <Test zindex={index} item={item} onClick={this.onItemClicked} />
            );
          })
        }
        {/* {this.state.length === 0 && "Dữ liệu trống"} */}
=======
        {this.todoitem.length > 0 &&
          this.todoitem.map((items, index) => (
            <Test key={index} items={items} />
          ))}
        {this.todoitem.length === 0 && "Dữ liệu trống"}
       <Header/>
       <ToDoList/>
       <List/>
       <Footer />
>>>>>>> 14914df4a0c49c6a2ba19ccf411766f32fc9f566
      </div>
    );
  }
}

export default App;
