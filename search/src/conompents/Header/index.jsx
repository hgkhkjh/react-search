import React, { Component } from 'react'
import axios from"axios"

export default class Header extends Component {
  search=()=>{
     console.log(this.searchbtn.value);
     this.props.update({isfirst:false, isloading:true})
     axios.get(`http://localhost:3000/api1/search/users?q=${this.searchbtn.value}`).then(
      //  成功时回调
       response=>{
        
         console.log("发送请求成功",response.data.items);
         this.props.update({users: response.data.items,isloading:false})
       },
      // 失败时回调
      error=>{
        this.props.update({err:error.message,isloading:false})
          console.log("失败了",error.message);
      }
     )
  } 

    render() {
        return (
            <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input type="text" placeholder="enter the name you search" 
               ref={c=>this.searchbtn=c}
              />
              &nbsp;
              <button onClick={this.search}>Search</button>
            </div>
          </section>
        )
    }
}
