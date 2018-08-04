import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {  withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

 class Maps extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      let markers = this.props.markers || []
      return(
    <div id="locationSec">
         <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 42.416, lng: -82.920 }}>
    <Marker position={{ lat: 42.416, lng: -82.920 }}/>
  </GoogleMap>
  </div>
      )
    }
}

const app = document.getElementById('app')
const maps = document.getElementById('maps')


export default withGoogleMap(Maps)