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
              <img className="img-fluid rounded-circle" src="03.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">Let there be rock!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
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

