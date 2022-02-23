import React, { Component } from 'react'

export default class Classcomponents extends Component {
    constructor(){
        super()
        this.state={
            login:false
        }
    }
    changestate=()=>{
        this.setState({
            login:true
        })
    }
  render() {
    return (
      <div>
          {
              this.state.login?<h1>hello</h1> :<h1>bye</h1>
          }
          {
              this.state.login && <h1>yes its true</h1>
          }
          <h1>{this.state.name}</h1>
          <button onClick={this.changestate}>button</button>
          <h1>this is class Component</h1>
          
      </div>
    )
  }
}

