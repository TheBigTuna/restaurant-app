import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import ReactLoading from 'react-loading';


export default class Load extends React.Component{
    constructor({ type, color }){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
    <ReactLoading type={'bars'} color={'#B23B14'} height={'40%'} width={'40%'} />
      )
    }
}