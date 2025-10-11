import React, { useRef, useState } from "react";

class App extends React.Component {
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
      </>
    );
  }
}

export default App;
