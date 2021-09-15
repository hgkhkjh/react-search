import React, { Component } from 'react'
import "./index.css"
export default class Listitem extends Component {
 
    render() {
        return (
            <div className="card"  >
            <a href={this.props.users.html_url} target="_blank" >
              <img src={this.props.users.avatar_url} style={{ width: '100px' }} />
            </a>
            <p className="card-text">{this.props.users.login}</p>
          </div>
        )
    }
}
