import React, { useRef, useState } from 'react'

class NewApp extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
   return <>
     ; asdf 123 {this.props.name}
    </>
  }
}
class MyApp extends React.Component {
  render()
  {
    return <>
    <h1>asdf</h1>
      <NewApp name={"amir"}></NewApp>
    </>
  }
}


export default MyApp