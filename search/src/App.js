import React, { Component } from 'react'
import "./App.css"
import Header from './conompents/Header'
import List from './conompents/List'
export default class App extends Component {
  // 初始化state
  state={
    users:[],
    isloading:false,
    isfirst:true,
    err:''

  }
  update=(updatemessage)=>{
     this.setState(
      updatemessage
     )
  }
  render() {
    return (
      <div className="container">
        <Header update={this.update} />
        <List  users={this.state}></List>
      </div>
    )
  }
}

