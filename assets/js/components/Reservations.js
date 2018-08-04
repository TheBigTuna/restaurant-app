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
            <div className="bg-black" id="contactSec">
            <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
            <h6 className="display-4">HOURS</h6>
              <p>Lunch
          Monday - Friday: 11:30pm - 2:30pm
            <br />
                Dinner
          Monday - Thursday: 5:00pm - 10:00pm
          Friday: 5:00pm - 10:30pm
            <br />
          Saturday: 12:00pm - 10:30pm
          Sunday: 12:00pm - 10:00pm</p>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h6 className="display-4">LOCATION</h6>
              <p>The Polar Bay Restuarant and Sushi Bar<br />
              1234 main st.<br />
              Detroit, MI 12345<br />
              Phone: 313-555-1212
              </p>
            </div>
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


