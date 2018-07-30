import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Section3 extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
        <div>
         <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src="01.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">Let there be rock!</h2>
              <p>A casual vibe permeates the atmosphere at The Polar Bay's, impressive Audio Visual capabilities, an exquisitely landscaped garden patio and special events and perfomances showcasing talent from the metro detroit area</p>
            </div>
          </div>
        </div>
      </div>
        </div>
      )
    }
}

const app = document.getElementById('app')
const sec3 = document.getElementById('section3')

ReactDOM.render(<Section3 />, sec3)

