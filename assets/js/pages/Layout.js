import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { Link } from "react-router";

export default class Layout extends React.Component {

  render () {
    return (
    <div>
      <h1>KillerNews.net</h1>
      {this.props.children}
      <Link to="archives">archives</Link>
      <Link to="settings">settings</Link>
    </div>
      )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
