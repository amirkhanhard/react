import React, { useRef, useState } from "react";
import "./style.css";

class NewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  // handleClick = (action) => {
  //   this.setState({
  //     count:(action == "add"?this.state.count+1:this.state.count-1)
  //   })
  // }
  render() {
    const handleClick = (action) => {
      this.setState({
        count: action == "add" ? this.state.count + 1 : this.state.count - 1,
      });
    };
    return (
      <>
        ; asdf 123 {this.props.name}
        <span>, COUNT = {this.state.count}</span>
        {/* <button onClick={()=>{this.handleClick("add")}}>+</button>
     <button onClick={()=>{this.handleClick()}}>-</button> */}
        <button
          onClick={() => {
            handleClick("add");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            handleClick();
          }}
        >
          -
        </button>
      </>
    );
  }
}
class MyApp extends React.Component {
  render() {
    return (
      <>
        <h1>asdf</h1>
        <NewApp name={"amir"}></NewApp>
      </>
    );
  }
}

export default MyApp;
