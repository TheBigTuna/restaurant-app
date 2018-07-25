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
              <img className="img-fluid rounded-circle" src="02.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-5">
              <h2 className="display-4">We salute you!</h2>
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
const sec2 = document.getElementById('section2')

ReactDOM.render(<Section2 />, sec2)

