import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Reservations extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
        <div>
     <div className="reservations py-5 bg-black">
      <div className="container">
      <h3>For reservations call (313) 555-1212</h3>
      </div>
       <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="p-5">
            <h4>Hours</h4>
            <p>
        Lunch
                    <br />
        Monday - Friday: 11:30pm - 2:30pm
                    <br />
        Dinner
                    <br />
        Monday - Thursday: 5:00pm - 10:00pm
                    <br />
        Friday: 5:00pm - 10:30pm
                    <br />
        Saturday: 12:00pm - 10:30pm
                    <br />
        Sunday: 12:00pm - 10:00pm
                    <br />

<   
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
const reservations = document.getElementById('reservations')


