import React, { Component } from "react";

class Header extends Component {
  onclick=()=> {
      console.log(this.onKeyUp);
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Nhập" onKeyUp={this.onKeyUp} />
          <button onClick={this.onclick}> Nút</button>
        </form>
      </div>
    );
  }
}

export default Header;
