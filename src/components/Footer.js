import React, { Component } from "react";
import "./HeaDer.css";
import "./index.css";
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onClickActive, number } = this.props;
    console.log("number ben footer", number);
    return (
      <div className="FooTer">
        <footer className="footer">
          <span className="todo-count">
            <strong>{number}</strong> item left
          </span>
          <ul className="filters">
            <li>
              <a className="selected">All</a>
            </li>
            <li>
              <a className="active" onClick={onClickActive}>
                Active
              </a>
            </li>
            <li>
              <a className="completed">Completed</a>
            </li>
          </ul>
          {/* <button className="clear-completed">Clear completed</button> */}
        </footer>
      </div>
    );
  }
}

export default Footer;
