import React, { useRef, useState } from "react";
import "./style.css";

class NewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log(this.props.name + " child constructor");
  }
  componentDidMount() {
    console.log(this.props.name + " child component did mount");
  }
  // handleClick = (action) => {
  //   this.setState({
  //     count:(action == "add"?this.state.count+1:this.state.count-1)
  //   })
  // }
  render() {
    console.log(this.props.name + " child render");
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
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log("parent render");
    return (
      <>
        <h1>asdf</h1>
        <NewApp name={"amir"}></NewApp>
        <NewApp name={"sameer"}></NewApp>
      </>
    );
  }
}

export default MyApp;

// parent constructor
// parent render
// amir child constructor
// amir child render
// sameer child constructor
// sameer child render
// amir child component did mount
// sameer child component did mount
// parent component did mount
