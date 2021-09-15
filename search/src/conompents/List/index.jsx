import React, { Component } from 'react'
import Listitem from './Listem'

export default class List extends Component {
  render() {
    return (
      <div className="row">
        {
          this.props.users.isfirst ? <h2 style={{margin:"50px"}}>Welcome to use, please enter the keyword</h2> :
          this.props.users.isloading ? <h2  style={{margin:"50px"}}>Loading......</h2> :
          this.props.users.err ? <h2  style={{margin:"50px"}}>{this.props.users.err}</h2> :
          this.props.users.users.map((a) => {
                  return (
                    <Listitem key={a.id} users={a} />
                  )
                })
        }
      </div>
    )
  }
}
