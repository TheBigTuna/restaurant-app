import React, { Component} from 'react'
import ReactDOM from 'react-dom'




export default class Section1 extends React.Component{
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
              <img className="img-fluid rounded-circle img1" src="https://shiro-restaurant.com/wp-content/uploads/2017/02/salmon-on-the-beach.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">Welcome To <br /> The Polar Bay</h2>
              <p>Our varied menu offers breakfast, lunch, luxury afternoon tea and evening meals based on tapas in addition to other 
              special dishes prepared by our highly skilled kitchen team.</p>
                 <div className="bg-circle-1 bg-circle s1"></div>
            </div>
          </div>
        </div>
      </div>
        </div>
      )
    }
}

const app = document.getElementById('app')
const sec1 = document.getElementById('section1')


