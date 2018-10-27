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
import Reservations from '../components/Reservations.js'
import Footer from '../components/Footer.js'
import Load from '../Components/Load.js'


export default class Layout extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }

     navScroll() {
    let posTop = window.scrollTo(0,0);
    document.addEventListener("scroll", () => {
    let pos = pageYOffset;
    let navList1 = document.getElementById('navList1');
    let navList2 = document.getElementById('navList2');
    let navList3 = document.getElementById('navList3');
    let navList4 = document.getElementById('navList4');
     if(pos < 477){
      navList1.style.backgroundColor="rgba(0,0,0,0)";
      navList1.style.color="white";
      navList2.style.backgroundColor="rgba(0,0,0,0)";
      navList2.style.color="white";
      navList3.style.backgroundColor="rgba(0,0,0,0)";
      navList3.style.color="white";
      navList4.style.backgroundColor="rgba(0,0,0,0)";
      navList4.style.color="white";
     }
     else if (pos > 478 && pos < 1793){
      navList1.style.backgroundColor="white";
      navList1.style.color="black";
      navList2.style.backgroundColor="rgba(0,0,0,0)";
      navList2.style.color="white";
      navList3.style.backgroundColor="rgba(0,0,0,0)";
      navList3.style.color="white";
      navList4.style.backgroundColor="rgba(0,0,0,0)";
      navList4.style.color="white";
     }
      else if (pos > 1794 && pos < 2200){
      navList1.style.backgroundColor="rgba(0,0,0,0)";
      navList1.style.color="white";
      navList2.style.backgroundColor="white";
      navList2.style.color="black";
      navList3.style.backgroundColor="rgba(0,0,0,0)";
      navList3.style.color="white";
      navList4.style.backgroundColor="rgba(0,0,0,0)";
      navList4.style.color="white";
     }
      else if (pos > 2201 && pos < 2400){
      navList1.style.backgroundColor="rgba(0,0,0,0)";
      navList1.style.color="white";
      navList2.style.backgroundColor="rgba(0,0,0,0)";
      navList2.style.color="white";
      navList3.style.backgroundColor="white";
      navList3.style.color="black";
      navList4.style.backgroundColor="rgba(0,0,0,0)";
      navList4.style.color="white";
     }
     else if (pos > 2401){
      navList1.style.backgroundColor="rgba(0,0,0,0)";
      navList1.style.color="white";
      navList2.style.backgroundColor="rgba(0,0,0,0)";
      navList2.style.color="white";
      navList3.style.backgroundColor="rgba(0,0,0,0)";
      navList3.style.color="white";
      navList4.style.backgroundColor="white";
      navList4.style.color="black";
     }
    });
    
     }
     
      showRestaurant() {
            window.addEventListener("load", function(event) {
             let loadContainer = document.getElementsByClassName("loadContainer")[0];
             let restaurantContainer = document.getElementsByClassName("restaurantContainer")[0];
             loadContainer.classList.remove('block');
             loadContainer.classList.add('none');
             restaurantContainer.classList.remove('none');
             restaurantContainer.classList.add('block');
        });
      }

      scrollAbout() {
          window.scrollTo({
          top: 482,
          behavior: "smooth"
        });
      }

      scrollMenu() {
          window.scrollTo({
          top: 1798,
          behavior: "smooth"
        });
      }

      scrollLocation() {
          window.scrollTo({
          top: 2204,
          behavior: "smooth"
        });
      }

      scrollContact() {
          window.scrollTo({
          top: 2404,
          behavior: "smooth"
       });
      }

    render(){
      return(
        <div>
        {this.showRestaurant()}
        <div className="loadContainer block">
        <Load  />
        </div >
        <div className="restaurantContainer none">
        <div onScroll={this.navScroll()}>
        <Navbar 
        scrollAbout = {this.scrollAbout}
        scrollMenu = {this.scrollMenu}
        scrollLocation = {this.scrollLocation}
        scrollContact = {this.scrollContact}
        />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Menus />
        <Maps 
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}/>
        <Reservations />
        <Footer />
        </div>
        </div>
        </div>
      )
    }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />,app)