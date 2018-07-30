import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export default class Maps extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius",key:"AIzaSyCrARybfJPN_d8JWPnzLPpCHREPQmnMPOc"};
    }
    
    render(){
      return(
        <div>
       <h1>Maps</h1>
        </div>
      )
    }
}

const app = document.getElementById('app')
const maps = document.getElementById('maps')


