import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Navbar extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Sign Up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Log In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
      )
    }
}

const app = document.getElementById('app')
const nav = document.getElementById('navbar')

ReactDOM.render(<Navbar />, nav)

