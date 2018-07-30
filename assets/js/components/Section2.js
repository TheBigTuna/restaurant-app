import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Section2 extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
        <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src="04.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-5">
              <h2 className="display-4">Dine With Us!</h2>
              <p>The Polar Bay  was built in 1929, a gift from Charles Rogers to his future wife Harriet Thornton and, is a resturant and sushi bar. 
               We specialise in the best produce from Gwynedd, Wales and the world and offer breakfast, lunch, fantastically presented afternoon teas 
               and evening meals based on tapas and other inspirational meals.</p>  
            </div>
          </div>
        </div>
      </div>
        </div>
      )
    }
}

const app = document.getElementById('app')
const sec2 = document.getElementById('section2')


