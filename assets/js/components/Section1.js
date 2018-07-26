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
              <img className="img-fluid rounded-circle img1" src="01.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">Welcome To <br /> The Polar Bay</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
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

ReactDOM.render(<Section1 />, sec1)

