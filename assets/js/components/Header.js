import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
        <div>
        <header className="masthead text-center text-white">
      <div className="masthead-content">
        <div className="container">
          <h1 className="masthead-heading mb-0">The Polar Bay</h1>
          <h2 className="masthead-subheading mb-0">welcome</h2>
          {/*<a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>*/}
        </div>
      </div>
    </header>
      <div className="container" >
        <div className="row">
          <div className="col-lg-12">
          </div>
        </div>  
       </div>
        </div>
      )
    }
}

const app = document.getElementById('app')
const head = document.getElementById('header')

