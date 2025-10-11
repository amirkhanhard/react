
// we have to set the default state vlaue else it will throw error
// the render function render the content with default states
// then the componentdid mount is called and the states are updated again and then ui is rendered again with updated states



import React, { useRef, useState } from 'react'

class NewApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count:1,
      userInfo:{
        login:"",
        avatar_url:""
      }
    }
    console.log(this.props.name+" child constructor");
  };
  async componentDidMount() {
    console.log(this.props.name+" child component did mount");
    const fetch1 = await fetch("https://api.github.com/users/amirkhanhard");
    const data = await fetch1.json();
    
    this.setState({
      userInfo:data
    })
    console.log(this.state.userInfo);
  }
  handleClick = (action="") => {
    this.setState({
      count:(action == "add"?this.state.count+1:this.state.count-1)
    })
  }
  render() {
    console.log(this.props.name+" child render");
  
   return <>
     Testing goes here<br></br> {this.props.name}
     <br></br>
     {this.state.userInfo.login}
     <br></br>
     <img src={this.state.userInfo.avatar_url} style={{width:"50px"}}></img>
     <br></br>
     <span>COUNT = {this.state.count} </span>
     <button onClick={()=>{this.handleClick("add")}}>+</button>
     <button onClick={()=>{this.handleClick()}}>-</button>
    </>
  }
}
class App extends React.Component {
   constructor (props) {
    super(props);
     console.log("parent constructor");
  };
  componentDidMount() {
     console.log("parent component did mount");
  }
  render()
  {
    console.log("parent render");
    return <>
    <h1>asdf</h1>
      <NewApp name={"amir"}></NewApp>
    </>
  }
}


export default App
