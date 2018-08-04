import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Menus extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    randomPics(){
      let pic1 = document.getElementsByClassName('square1').src="04.jpg";
      let listPics = [pic1];
    return listPics[Math.floor(Math.random() * listPics.length)];
    }
    
    render(){
      return(
        <div>
         <div className="container" id="menuSec">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5 imgGroup">
              <img className="img-fluid rounded-0 square1" src="04.jpg"  alt="" />
              <img className="img-fluid rounded-0 square2" src="08.jpg"  alt="" />
              <img className="img-fluid rounded-0 square3" src="09.jpg"  alt="" />
              <img className="img-fluid rounded-0 square4" src="10.jpg"  alt="" />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <div className="bg-circle-3 bg-circle"></div>
              <div className="bg-circle-4 bg-circle"></div>
              <h2 className="display-4 enjoy">Enjoy! <br />Our Menus</h2>
              <ul className="menuList">
              <li>lunch menu</li>
              <li>dinner menu</li>
              <li>sushi</li>
              <li>desserts</li>
              <li>wine list</li>
              <li>martinis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </div>
      )
    }
}

const app = document.getElementById('app')
const menus = document.getElementById('menus')


