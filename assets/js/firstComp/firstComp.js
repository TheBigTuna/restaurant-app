import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../components/Navbar.js'
import Header from '../components/Header.js'
import Section1 from '../components/Section1.js'
import Section2 from '../components/Section2.js'
import Section3 from '../components/Section3.js'
import Maps from '../components/Maps.js'
import Footer from '../components/Footer.js'

export default class Layout extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
        <div>
        <Navbar />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Maps />
        <Footer />
        </div>
      )
    }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />,app)