import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {  withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import Navbar from '../components/Navbar.js'
import Header from '../components/Header.js'
import Section1 from '../components/Section1.js'
import Section2 from '../components/Section2.js'
import Section3 from '../components/Section3.js'
import Menus from '../components/Menus.js'
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
        <Menus />
        <Maps 
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}/>
        <Footer />
        </div>
      )
    }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />,app)