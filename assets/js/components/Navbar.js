import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Navbar extends React.Component{
    constructor(props){
      super(props);
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
              <a className="nav-link" id="navList1" onClick={this.props.scrollAbout}>About</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" id="navList2" onClick={this.props.scrollMenu}>Menus</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" id="navList3" onClick={this.props.scrollLocation}>Location</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" id="navList4" onClick={this.props.scrollContact}>Contact</a>
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


