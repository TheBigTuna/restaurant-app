import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Footer extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
        <div>
        <footer className="py-5 bg-black" />
      <div className="container">
        <p className="m-0 text-center text-white small">Copyright &copy; Your Website 2018</p>
      </div>
        </div>
      )
    }
}

const app = document.getElementById('app')
const footer = document.getElementById('footer')

ReactDOM.render(<Footer />, footer)

