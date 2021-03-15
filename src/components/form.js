import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: " " };
  }
  
  nhap = (event) => {
    this.setState({ value: event.target.value });
  };

  click = (event) => {
    alert("Xin chào :" + this.state.value);
    event.preventDefault();
  };
  render() {
    return (
      <div className="Form">
        <form onSubmit={this.click}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.nhap} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
