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
         <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 42.446, lng: -82.887 }}>
  </GoogleMap>
      )
    }
}

const app = document.getElementById('app')
const maps = document.getElementById('maps')


export default withGoogleMap(Maps)