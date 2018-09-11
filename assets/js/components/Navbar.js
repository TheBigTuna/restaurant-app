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
        <p className="navbar-brand" id="navText1">The Polar Bay</p>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <a className="nav-link" href="#aboutSec" id="navList1">About</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="#menuSec" id="navList2">Menus</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="#locationSec" id="navList3">Location</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#contactSec" id="navList4">Contact</a>
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


