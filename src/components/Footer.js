import React, { Component } from "react";
import "./HeaDer.css";
import "./index.css";
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  onClickAll = () => {
    const { updateStatusShow } = this.props;
    updateStatusShow("all");
  };
  onClickActive = () => {
    const { updateStatusShow } = this.props;
    updateStatusShow("active");
  };
  onClickCompleted = () => {
    const { updateStatusShow } = this.props;
    updateStatusShow("completed");
  };
  removeAllToDoListCompleted = () => {
    const { removeAllToDoListCompleted } = this.props;
    removeAllToDoListCompleted();
  };

  render() {
    const haveCompleted = this.props.toDoList.filter((num) => num.isComplete);
    const { statusShow, numberToDoActive, toDoList } = this.props;
    return (
      <div className="FooTer">
        <footer className="footer">
          <span className="todo-count">
            <strong>{numberToDoActive}</strong> item left
          </span>
          <ul className="filters">
            <li>
              <a
                className={statusShow === "all" ? "selected" : ""}
                onClick={this.onClickAll}
              >
                All
              </a>
            </li>
            <li>
              <a
                className={statusShow === "active" ? "selected" : ""}
                onClick={this.onClickActive}
              >
                Active
              </a>
            </li>
            <li>
              <a
                className={statusShow === "completed" ? "selected" : ""}
                onClick={this.onClickCompleted}
              >
                Completed
              </a>
            </li>
          </ul>
         { haveCompleted.length > 0 && (  <a className="clear-completed" onClick={this.removeAllToDoListCompleted}>Clear completed </a> )}
         
        </footer>
      </div>
    );
  }
}

export default Footer;
