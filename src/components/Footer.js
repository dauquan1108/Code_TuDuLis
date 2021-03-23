import React, { Component } from "react";
import "./HeaDer.css";
import "./index.css";
class Footer extends Component {
  render() {
    return (
      <div className="FooTer">
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item left
          </span>
          <ul className="filters">
            <li>
              <a className="selected" href="#/">
                All
              </a>
            </li>
            <li>
              <a className="#/active">Active</a>
            </li>
            <li>
              <a className="#/completed">Completed</a>
            </li>
          </ul>
          {/* <button className="clear-completed">Clear completed</button> */}
        </footer>
      </div>
    );
  }
}

export default Footer;
